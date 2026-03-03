import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json({ success: false, error: "Missing secret key" }, { status: 500 });
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
      { method: "POST" }
    );

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: data["error-codes"] }, { status: 400 });
    }
  } catch (err) {
    console.error("Captcha verification error:", err);
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 });
  }
}

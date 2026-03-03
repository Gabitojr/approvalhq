<script>
	import { CheckCircle2, Zap, TrendingUp, Award, BarChart3, Lock, ArrowRight, Star } from 'lucide-svelte';
</script>

<!-- Navigation Bar -->
<nav class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-amber-100">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
		<div class="text-2xl font-bold text-amber-900">AllSolutionsHQ</div>
		<div class="hidden md:flex gap-8 items-center">
			<a href="#eligibility" class="text-slate-700 hover:text-amber-600 transition">Eligibility</a>
			<a href="#process" class="text-slate-700 hover:text-amber-600 transition">Process</a>
			<a href="#features" class="text-slate-700 hover:text-amber-600 transition">Why Us</a>
			<a href="#faq" class="text-slate-700 hover:text-amber-600 transition">FAQ</a>
			<button class="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition font-medium">
				Apply Now
			</button>
		</div>
	</div>
</nav>

<!-- Hero Section with Qualification Highlight -->
<section class="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-amber-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
				Business Funding Made <span class="text-amber-600">Simple</span>
			</h1>
			<p class="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
				Access up to $500K in funding with transparent terms. No personal guarantees. No surprises.
			</p>
			<button class="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-10 py-4 rounded-lg hover:shadow-lg transition font-semibold text-lg inline-flex items-center gap-2">
				Get Started in 5 Minutes
				<ArrowRight class="w-5 h-5" />
			</button>
		</div>

		<!-- Key Stats Bar -->
		<div class="grid md:grid-cols-4 gap-6 mt-16">
			<div class="bg-white rounded-lg p-6 border border-amber-100 text-center">
				<div class="text-3xl font-bold text-amber-600 mb-2">$2.5B+</div>
				<p class="text-sm text-slate-600">Funded to Businesses</p>
			</div>
			<div class="bg-white rounded-lg p-6 border border-amber-100 text-center">
				<div class="text-3xl font-bold text-amber-600 mb-2">48 Hours</div>
				<p class="text-sm text-slate-600">Average Funding Time</p>
			</div>
			<div class="bg-white rounded-lg p-6 border border-amber-100 text-center">
				<div class="text-3xl font-bold text-amber-600 mb-2">550+ FICO</div>
				<p class="text-sm text-slate-600">Minimum Credit Score</p>
			</div>
			<div class="bg-white rounded-lg p-6 border border-amber-100 text-center">
				<div class="text-3xl font-bold text-amber-600 mb-2">99%</div>
				<p class="text-sm text-slate-600">Satisfaction Rate</p>
			</div>
		</div>
	</div>
</section>

<!-- Eligibility Requirements Section -->
<section id="eligibility" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Quick Qualification Check</h2>
			<p class="text-xl text-slate-600">See if your business qualifies in under 2 minutes</p>
		</div>

		<div class="grid md:grid-cols-2 gap-8 mb-12">
			<!-- Business Focused -->
			<div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-200">
				<h3 class="text-2xl font-bold text-slate-900 mb-6">Business-Focused Credit Review</h3>
				<ul class="space-y-4">
					{#each [
						'Minimum 550 FICO Score',
						'$50K+ Annual Revenue',
						'In Business 2+ Years',
						'Valid Business License',
						'2+ Years Tax Returns'
					] as item}
						<li class="flex items-start gap-3">
							<CheckCircle2 class="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
							<span class="text-slate-700">{item}</span>
						</li>
					{/each}
				</ul>
				<p class="text-xs text-slate-600 mt-6 italic">
					† Eligibility is evaluated primarily on business revenue and cash flow; personal credit may be reviewed when required for identity verification or fraud prevention.
				</p>
			</div>

			<!-- What We Look At -->
			<div class="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border-2 border-slate-200">
				<h3 class="text-2xl font-bold text-slate-900 mb-6">What We Evaluate</h3>
				<ul class="space-y-4">
					{#each [
						'Business cash flow & revenue',
						'Time in business',
						'Industry & market conditions',
						'Bank account activity',
						'Payment history'
					] as item}
						<li class="flex items-start gap-3">
							<BarChart3 class="w-5 h-5 text-slate-600 flex-shrink-0 mt-1" />
							<span class="text-slate-700">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Legal Disclaimer -->
		<div class="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-6">
			<p class="text-sm text-slate-700">
				<span class="font-semibold">† Credit Reviews & Compliance:</span>
				Credit reviews may include personal credit in limited circumstances for identity verification, fraud prevention, or regulatory compliance purposes. Business-Focused Credit Review means eligibility is evaluated primarily on business revenue and cash flow. AllSolutionsHQ is committed to fair lending practices and complies with all applicable regulations.
			</p>
		</div>
	</div>
</section>

<!-- Process Section -->
<section id="process" class="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Our Funding Process</h2>
		<div class="grid md:grid-cols-4 gap-6">
			{#each [
				{
					step: '1',
					title: 'Apply',
					desc: 'Complete a simple online application in 5 minutes with basic business info',
					icon: 'form'
				},
				{
					step: '2',
					title: 'Verify',
					desc: 'We verify your information and run a quick business credit review',
					icon: 'check'
				},
				{
					step: '3',
					title: 'Approve',
					desc: 'Get a funding offer within 24 hours with transparent terms',
					icon: 'approve'
				},
				{
					step: '4',
					title: 'Fund',
					desc: 'Accept terms and receive funds in your account in 48 hours',
					icon: 'money'
				}
			] as item}
				<div class="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-6 relative">
					<div class="absolute -top-4 -left-4 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
						{item.step}
					</div>
					<h3 class="text-xl font-bold text-white mb-2 mt-2">{item.title}</h3>
					<p class="text-slate-300 text-sm">{item.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">Why Businesses Choose Us</h2>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each [
				{
					icon: Zap,
					title: 'Lightning-Fast Decisions',
					desc: 'Get approved within 24 hours. No weeks of waiting for bureaucracy.'
				},
				{
					icon: Lock,
					title: 'No Personal Guarantees',
					desc: 'Keep your personal assets protected. We fund based on business performance.'
				},
				{
					icon: TrendingUp,
					title: 'Flexible Terms',
					desc: 'Repayment schedules that match your business cash flow, not rigid timelines.'
				},
				{
					icon: Award,
					title: 'Transparent Pricing',
					desc: 'Know exactly what you pay. Zero hidden fees or surprise charges.'
				},
				{
					icon: BarChart3,
					title: 'Business-Focused Review',
					desc: 'Evaluated on revenue & cash flow, not just personal credit scores.'
				},
				{
					icon: Zap,
					title: 'Expert Support',
					desc: 'Dedicated advisors guide you through every step of the process.'
				}
			] as feature}
				<div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 border border-amber-100 hover:border-amber-300 hover:shadow-lg transition">
					<div class="inline-block p-3 bg-amber-100 rounded-lg mb-4">
						<feature.icon class="w-6 h-6 text-amber-600" />
					</div>
					<h3 class="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
					<p class="text-slate-600">{feature.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Testimonials Section -->
<section class="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">Funded Success Stories</h2>
		<div class="grid md:grid-cols-3 gap-8">
			{#each [
				{
					name: 'Jennifer Liu',
					company: 'E-Commerce Store Owner',
					text: 'Got funded in 36 hours during our busiest season. The process was seamless and the terms were fair.'
				},
				{
					name: 'Marcus Thompson',
					company: 'Restaurant Owner',
					text: 'No personal guarantees meant I could keep my house safe while investing in my business. That peace of mind is invaluable.'
				},
				{
					name: 'Sofia Martinez',
					company: 'Service Business Owner',
					text: 'The team actually understood our industry. They didn\'t just approve a loan—they became partners in our growth.'
				}
			] as testimonial}
				<div class="bg-white rounded-lg p-8 border-l-4 border-amber-600 shadow-md hover:shadow-lg transition">
					<div class="flex gap-1 mb-4">
						{#each Array(5) as _}
							<Star class="w-4 h-4 fill-amber-400 text-amber-400" />
						{/each}
					</div>
					<p class="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
					<div>
						<p class="font-bold text-slate-900">{testimonial.name}</p>
						<p class="text-sm text-slate-600">{testimonial.company}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section id="faq" class="py-20 bg-white">
	<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
		<h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">Common Questions</h2>
		<div class="space-y-4">
			{#each [
				{
					q: 'What credit score do I need?',
					a: 'We look for a minimum 550 FICO score, but focus primarily on your business revenue and cash flow.'
				},
				{
					q: 'How long does approval take?',
					a: 'Most businesses get approved within 24 hours of submitting a complete application.'
				},
				{
					q: 'Are there personal guarantees?',
					a: 'No. We evaluate you based on your business performance, not your personal credit history.'
				},
				{
					q: 'What\'s the maximum funding amount?',
					a: 'We offer up to $500K depending on your business revenue and cash flow.'
				}
			] as item}
				<details class="bg-amber-50 rounded-lg p-6 border border-amber-200 group cursor-pointer">
					<summary class="font-semibold text-slate-900 flex justify-between items-center">
						{item.q}
						<span class="inline-block transition group-open:rotate-180">▼</span>
					</summary>
					<p class="text-slate-600 mt-4">{item.a}</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<!-- Final CTA -->
<section class="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
	<div class="max-w-4xl mx-auto text-center px-4">
		<h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Funded?</h2>
		<p class="text-xl text-amber-50 mb-8">Join 5,000+ businesses that have scaled with AllSolutionsHQ.</p>
		<button class="bg-white text-amber-600 px-10 py-4 rounded-lg hover:bg-amber-50 transition font-semibold text-lg inline-flex items-center gap-2">
			Apply Now
			<ArrowRight class="w-5 h-5" />
		</button>
		<p class="text-sm text-amber-100 mt-6">Approval within 24 hours. Funds in 48 hours.</p>
	</div>
</section>

<!-- Footer -->
<footer class="bg-slate-900 text-slate-400 py-12">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid md:grid-cols-4 gap-8 mb-8">
			<div>
				<p class="font-bold text-white mb-4">AllSolutionsHQ</p>
				<p class="text-sm">Simple, transparent funding for growing businesses.</p>
			</div>
			<div>
				<p class="font-bold text-white mb-4">Product</p>
				<ul class="space-y-2 text-sm">
					<li><button class="hover:text-amber-400 transition text-left">How It Works</button></li>
					<li><button class="hover:text-amber-400 transition text-left">Rates & Terms</button></li>
					<li><button class="hover:text-amber-400 transition text-left">Apply Now</button></li>
				</ul>
			</div>
			<div>
				<p class="font-bold text-white mb-4">Company</p>
				<ul class="space-y-2 text-sm">
					<li><button class="hover:text-amber-400 transition text-left">About Us</button></li>
					<li><button class="hover:text-amber-400 transition text-left">Blog</button></li>
					<li><button class="hover:text-amber-400 transition text-left">Contact</button></li>
				</ul>
			</div>
			<div>
				<p class="font-bold text-white mb-4">Legal</p>
				<ul class="space-y-2 text-sm">
					<li><button class="hover:text-amber-400 transition text-left">Privacy Policy</button></li>
					<li><button class="hover:text-amber-400 transition text-left">Terms of Service</button></li>
					<li><button class="hover:text-amber-400 transition text-left">Accessibility</button></li>
				</ul>
			</div>
		</div>
		<div class="border-t border-slate-800 pt-8 text-center text-sm">
			<p>&copy; 2025 AllSolutionsHQ. All rights reserved.</p>
		</div>
	</div>
</footer>

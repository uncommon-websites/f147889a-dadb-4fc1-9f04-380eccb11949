<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import AboutTeaser from "$lib/components/layout/AboutTeaser.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
	import UseCases from "$lib/components/layout/UseCases.svelte";
</script>

<CenteredTextOnlyHero
	title="Proactive workflow automation that learns from your patterns"
	subtitle="Attention captures your screen activity and executes repetitive tasks before you even ask, saving software engineers 2-3 hours of context switching daily."
	imageSrc="/generated/image-a-serene-workspace-with-a-muted-natural-.webp"
/>
<LogoScroller 
	label="Trusted by leading tech companies" 
	logoUrls={[
		'https://logo.clearbit.com/github.com',
		'https://logo.clearbit.com/stripe.com',
		'https://logo.clearbit.com/figma.com',
		'https://logo.clearbit.com/vercel.com'
	]}
/>

<Summary
	title="What we do"
	text="Attention delivers proactive workflow automation by continuously recording your screen and learning your patterns to execute repetitive tasks before you even ask. Our AI-powered system saves software engineers 2-3 hours daily by eliminating context switching and forgotten tasks. With local-only processing and encrypted data storage, we provide seamless productivity gains without compromising privacy."
/>

<UseCases
	title="Use Cases"
	subtitle="Real-world applications transforming how teams work"
	useCases={[
		{
			title: "Eliminate context switching for developers",
			description: "Stop losing momentum when switching between tasks. Attention learns your coding patterns and automatically surfaces relevant context, documentation, and open tickets when you resume work on different projects or features.",
			image: "/generated/image-a-software-engineer-is-sitting-at-a-desk.webp",
			link: {
				href: "/use-cases/context-switching",
				label: "Learn more"
			}
		},
		{
			title: "Proactive bug tracking and follow-ups",
			description: "Never miss a critical bug report again. Attention monitors your screen activity and automatically tracks bug reports, creates follow-up reminders, and surfaces related issues when you're working on similar code sections.",
			image: "/generated/image-a-product-manager-is-thoughtfully-review.webp",
			link: {
				href: "/use-cases/bug-tracking",
				label: "Learn more"
			}
		},
		{
			title: "Automated sprint planning assistance",
			description: "Streamline your planning process. Attention analyzes your team's historical work patterns and automatically suggests task prioritization, estimates, and dependencies based on past sprint data and current codebase complexity.",
			image: "/generated/image-a-developer-is-sitting-at-a-table-concen.webp",
			link: {
				href: "/use-cases/sprint-planning",
				label: "Learn more"
			}
		}
	]}
/>

<Testimonials
	testimonials={[
		{
			name: "Renzo Alvarez",
			position: "Staff Engineer",
			company: "SyncLayer",
			quote:
				"Attention saved me 2.5 hours daily by automating code review follow-ups and bug tracking.\nI haven't missed a critical issue since implementing it - it's like having a second brain that never forgets.",
			image: "/generated/image-a-professional-hispanic-man-standing-at-.webp"
		},
		{
			name: "Sophie Tanaka",
			position: "Product Lead",
			company: "Loop Systems",
			quote:
				"We caught 3 major user experience issues before they reached production, saving us an estimated $50K in emergency fixes.\nAttention's pattern recognition identified risks I would have completely missed during sprint reviews.",
			image: "/generated/image-a-professional-asian-woman-in-a-startup-.webp"
		},
		{
			name: "Marcus Thompson",
			position: "Engineering Manager",
			company: "DevFlow",
			quote:
				"My team's productivity increased 40% after implementing Attention - it eliminated the 'what was I working on?' problem entirely.\nWe're saving $15K monthly in reduced context switching costs and our deployment velocity doubled.",
			image: "/generated/image-a-professional-black-man-seated-in-a-con.webp"
		}
	]}
/>

<Features
	title="Features"
	subtitle="Powerful automation that learns from your patterns"
	features={[
		{
			title: "Proactive task execution",
			description:
				"Attention learns your workflow patterns and executes repetitive tasks before you even ask. Save 2-3 hours daily by eliminating context switching and forgotten tasks."
		},
		{
			title: "Continuous screen recording AI",
			description:
				"Advanced screen analysis technology captures your activity and identifies automation opportunities. Our AI understands your work patterns better than any manual system."
		},
		{
			title: "Local-only processing",
			description:
				"All screen recording and pattern analysis happens locally on your device with encrypted data storage. Your sensitive work stays private while you enjoy seamless automation."
		}
	]}
/>
<AboutTeaser />
<CallToAction
	title="Ready to reclaim your focus?"
	subtitle="Join the productivity revolution"
	description="Stop losing 2-3 hours daily to context switching. Join software engineers and product managers who've already transformed their workflows with Attention's proactive automation."
	imageSrc="/generated/image-a-happy-software-engineer-in-a-modern-of.webp"
	callsToAction={[
		{
			href: "/get-started",
			label: "Start free trial",
			variant: "primary"
		},
		{
			href: "/demo",
			label: "Watch demo",
			variant: "secondary"
		}
	]}
/>

<script lang="ts">
	// Types
	import type { PageProps } from "./$types";

	// Components
	import Features from "$lib/components/layout/Features.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import CallToAction from "$lib/components/layout/CallToAction.svelte";
	import Pricing from "$lib/components/layout/Pricing.svelte";

	// Props
	const { data }: PageProps = $props();
</script>

<Pricing />

<Testimonials
	testimonials={[
		{
			name: "Kai Chen",
			position: "Software Engineer",
			company: "Mercury",
			quote:
				"Attention feels like having an invisible teammate who picks up the slack every time I get a Slack ping mid-flow. It's saved me 2+ hours daily without any setup.",
			image: "/generated/image-professional-headshot-of-an-asian-male-s.webp"
		},
		{
			name: "Zara Williams",
			position: "Product Manager",
			company: "Supabase",
			quote:
				"It remembers the little things I always forget. I haven't missed a single follow-up task in over a month. ROI was immediate—paid for itself in the first week.",
			image: "/generated/image-professional-headshot-of-a-black-female-.webp"
		},
		{
			name: "Mateo Rodriguez",
			position: "Senior Engineer",
			company: "Retool",
			quote:
				"Every automation platform claims to save you time. Attention actually does it—without setup, rules, or hacking together scripts. Reduced context switching by 40%.",
			image: "/generated/image-professional-headshot-of-a-hispanic-male.webp"
		},
		{
			name: "Leila Nazari",
			position: "Engineering Manager",
			company: "Vanta",
			quote:
				"Privacy was a dealbreaker for us. Attention nailed it with local-only processing. No tradeoffs. Team productivity increased 25% in just 3 weeks.",
			image: "/generated/image-professional-headshot-of-a-middle-easter.webp"
		}
	]}
/>

<CallToAction
	title="Ready to reclaim your focus?"
	subtitle="Join thousands saving 2-3 hours daily"
	description="Stop losing time to context switching and forgotten tasks. Attention learns your workflows through local screen recording and executes repetitive tasks before you even ask. Your data stays encrypted and private—entirely on your device."
	imageSrc="/generated/image-a-software-engineer-sits-at-a-desk-smili.webp"
	callsToAction={[
		{
			href: "/get-started",
			label: "Start free trial",
			variant: "primary"
		},
		{
			href: "/contact",
			label: "Talk to founders",
			variant: "secondary"
		}
	]}
/>

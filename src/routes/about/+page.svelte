<script lang="ts">
	// Components
	import CallToAction from "$lib/components/layout/CallToAction.svelte";

	// Icons
	import StakeholderGrid from "$lib/components/layout/StakeholderGrid.svelte";
	import Story from "./Story.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";

	// Constants
	const values = [
		{
			title: "Proactive automation",
			description: "We believe the best technology anticipates your needs and acts before you even ask."
		},
		{
			title: "Privacy first",
			description: "Your data stays yours with local-only processing and encrypted storage—no compromises."
		},
		{
			title: "Deep focus",
			description: "We're building the future where context switching becomes a thing of the past."
		}
	];
</script>

<SecondaryHero
	title="Automating your workflow"
	subtitle="before you even ask"
	imageSrc="/generated/image-two-focused-software-engineers-collabora.webp"
/>

<!-- Story Section -->
<Story
	paragraphs={[
		"We started Attention after watching brilliant engineers and product managers lose hours every day to context switching and forgotten tasks. Despite having the best productivity tools available, they were still drowning in the mental overhead of managing their workflows.",
		"Our founders Julian and Aidan brought together deep technical expertise in screen recording AI with proven entrepreneurial execution. Julian's background in ML research under Martin Kleppman at Cambridge gave us the foundation to solve proactive desktop assistance through advanced screen analysis.",
		"Today, we're building the future of workflow automation—software that learns your patterns and executes repetitive tasks before you even ask. With local-only processing and encrypted data storage, we're proving that powerful automation doesn't require sacrificing privacy."
	]}
/>

<!-- Our Culture Section -->
<Culture {values} />

<!-- StakeholderGrid Section -->
<StakeholderGrid
	stakeholderType="team"
	title="Our team."
	subtitle="Your partners in innovation."
	stakeholders={[
		{
			name: "Aidan Guo",
			position: "CEO & Cofounder",
			bio: "Entrepreneurial leader with proven execution experience from previous exits, focused on building the future of workflow automation.",
			image: "/generated/image-a-professional-headshot-of-aidan-guo-sit.webp"
		},
		{
			name: "Julian Windeck",
			position: "CTO & Cofounder",
			bio: "ML research expert with Cambridge PhD background under Martin Kleppman, specialized in advanced screen analysis and proactive desktop assistance.",
			image: "/generated/image-a-professional-headshot-of-julian-windec.webp"
		}
	]}
/>

<!-- Investors section removed as per company context -->

<!-- CTA Section -->
<CallToAction
	title="Ready to reclaim your focus?"
	subtitle="Stop losing hours to context switching"
	description="Join the power users and developers who've already discovered how Attention learns their patterns and executes repetitive tasks before they even ask. Experience proactive workflow automation that respects your privacy."
/>

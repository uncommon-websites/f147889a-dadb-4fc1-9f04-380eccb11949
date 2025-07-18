<script lang="ts">
	// Components
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
	import Story from "./about/Story.svelte";
</script>

<CenteredTextOnlyHero
	title="Proactive workflow automation that learns from your patterns"
	subtitle="Attention captures your screen activity and executes repetitive tasks before you even ask, saving software engineers 2-3 hours of context switching daily."
/>
<LogoScroller 
	label="Trusted by leading tech companies" 
	logoUrls={[
		'https://cdn.brandfetch.io/github.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
		'https://cdn.brandfetch.io/stripe.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
		'https://cdn.brandfetch.io/figma.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7',
		'https://cdn.brandfetch.io/vercel.com/w/400/h/400/logo?c=1id_elLz2Bd5Ej-dWo7'
	]}
/>

<Story
	paragraphs={[
		"You know that feeling when you're deep in code, and suddenly remember you promised to review that PR? Or when you're designing a feature and realize you never followed up on yesterday's Slack thread? Before you know it, you've lost three hours.",
		"Your computer sees these patterns all day. It knows when you usually check email, when you context-switch, when you forget. What if it could automatically draft that review reminder or queue up those follow-ups right when you need them?",
		"That's why we built Attention. It learns from your screen, understands your workflows, and quietly executes the repetitive tasks. Like scheduling that standup recap you always forget or preparing your daily PR reviews before you even open GitHub. Everything processes locally on your machine. No cloud, no privacy concerns.",
		"Julian lost entire afternoons to forgotten follow-ups during his PhD. Aidan watched teammates drop critical tasks between meetings. They realized computers already know our patterns. They just needed to act on them."
	]}
/>

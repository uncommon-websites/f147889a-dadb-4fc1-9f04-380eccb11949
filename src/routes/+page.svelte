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
		"Your computer already knows how you work. Now it works for you.",
		"Attention watches your screen (securely and locally), learns your patterns, and automates the tasks you forget or repeat. So you stay focused, responsive, and two steps ahead."
	]}
/>

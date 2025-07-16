<script lang="ts">
	// Components
	import Summary from "$lib/components/layout/Summary.svelte";
	import LogoScroller from "$lib/components/layout/LogoScroller.svelte";
	import CenteredTextOnlyHero from "$lib/components/layout/hero-sections/CenteredTextOnlyHero.svelte";
</script>

<CenteredTextOnlyHero
	title="Proactive workflow automation that learns from your patterns"
	subtitle="Attention captures your screen activity and executes repetitive tasks before you even ask, saving software engineers 2-3 hours of context switching daily."
	imageSrc="/generated/image-a-serene-workspace-with-a-muted-natural-.webp"
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

<Summary
	title="What we do"
	text="Attention delivers proactive workflow automation by continuously recording your screen and learning your patterns to execute repetitive tasks before you even ask. Our AI-powered system saves software engineers 2-3 hours daily by eliminating context switching and forgotten tasks. With local-only processing and encrypted data storage, we provide seamless productivity gains without compromising privacy."
/>

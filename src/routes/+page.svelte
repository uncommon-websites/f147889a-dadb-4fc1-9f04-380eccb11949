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
		"We started Attention because we were tired of losing hours every day to the same problem: constant context switching. As engineers and builders, we wanted to stay in flow—deep, uninterrupted focus where good ideas happen. But between Slack pings, browser tabs, Jira tickets, and a hundred tiny tasks, we felt like we were always catching up rather than moving forward.",
		"Most productivity tools ask you to change how you work. We thought—what if the tool just watched how you work, learned, and then started helping? So we built Attention. It runs quietly on your desktop, learns your patterns from how you use your screen, and proactively takes care of the busywork. Opening tickets, copying info between tools, pinging your team—it does it automatically, before you even need to ask.",
		"We protect your data with local-only processing and encrypted storage, so your workspace stays private. And we're building with developers in mind—so every workflow can be extended, scripted, and fine-tuned. No more forgotten tasks. No more mental overhead. Just time to build. Attention is not just automation. It's a second brain for your screen."
	]}
/>

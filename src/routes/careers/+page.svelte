<script lang="ts">
	// Types

	// Components
	import SectionHeader from "$lib/components/layout/SectionHeader.svelte";
	import Culture from "$lib/components/layout/Culture.svelte";
	import Testimonials from "$lib/components/layout/Testimonials.svelte";
	import SecondaryHero from "$lib/components/layout/hero-sections/SecondaryHero.svelte";
	import Card from "$lib/components/ui/Card.svelte";
	import JobList, { type JobOpening } from "./JobList.svelte";

	// Icons
	import IconBriefcase from "~icons/lucide/briefcase";
	import IconUsers from "~icons/lucide/users";
	import IconHeart from "~icons/lucide/heart";
	import IconGlobe from "~icons/lucide/globe";

	// Constants
	const SECTION_BASE_CLASSES = "section-py section-px container mx-auto";
	const GRADIENT_BG_CLASSES =
		"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800";
	const ICON_CONTAINER_CLASSES =
		"bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400 flex items-center justify-center rounded-full";

	const benefits = [
		{
			title: "Shape the future of productivity",
			description: "Work on cutting-edge AI and automation technology that fundamentally changes how people work and stay focused.",
			icon: IconBriefcase
		},
		{
			title: "Deep technical challenges",
			description: "Solve complex problems in screen recording AI, workflow automation, and privacy-first computing alongside world-class engineers.",
			icon: IconUsers
		},
		{
			title: "Early-stage equity opportunity",
			description: "Join a fast-growing company targeting the $240B productivity market with significant equity upside potential.",
			icon: IconHeart
		}
	];

	const openings: JobOpening[] = [
		// Engineering
		{
			title: "Senior Frontend Developer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Backend Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Design Engineer",
			department: "Engineering",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Design
		{
			title: "UX/UI Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Designer",
			department: "Design",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Product
		{
			title: "Product Manager",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Product Analyst",
			department: "Product",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},

		// Marketing
		{
			title: "Marketing Specialist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Content Strategist",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		},
		{
			title: "Social Media Manager",
			department: "Marketing",
			location: "Remote",
			type: "Full-time",
			url: "#"
		}
	];

	const employeeTestimonials = [
		{
			name: "Sarah Kim",
			position: "Senior Software Engineer",
			company: "AI Team",
			quote:
				"Building the screen recording AI that powers Attention's automation is the most intellectually stimulating work I've ever done. The privacy-first approach means we're solving harder problems, but that's what makes it exciting. Plus, the deep focus culture here actually lets me code for hours without interruption.",
			image:
				"/generated/image-professional-headshot-of-a-young-asian-w.webp"
		},
		{
			name: "Marcus Thompson",
			position: "Product Manager",
			company: "Product Team",
			quote:
				"What drew me to Attention was the opportunity to help power users reclaim their productivity. Seeing developers go from losing 3 hours daily to context switching to having seamless automation is incredibly rewarding. The founders' technical depth makes product decisions so much more informed.",
			image:
				"/generated/image-professional-headshot-of-a-black-man-pro.webp"
		},
		{
			name: "Elena Rodriguez",
			position: "Backend Developer",
			company: "Infrastructure Team",
			quote:
				"The technical challenges here are unreal - from local-only processing to encrypted data storage, we're pushing the boundaries of what's possible. I've grown more in six months here than in two years at my previous company. The equity opportunity as we target the $240B productivity market is just the cherry on top.",
			image:
				"/generated/image-professional-headshot-of-a-hispanic-woma.webp"
		}
	];

	const processSteps = [
		{
			step: 1,
			title: "Apply with code",
			description:
				"Share your GitHub, technical portfolio, and tell us about a challenging problem you've solved. We value quality over quantity."
		},
		{
			step: 2,
			title: "Technical conversation",
			description: "Pair program with our team, discuss system design, and explore how you approach automation challenges. No whiteboarding."
		},
		{
			step: 3,
			title: "Culture fit and offer",
			description: "Meet the founders, understand our mission, and if we're aligned, receive an offer with competitive equity and benefits."
		}
	];

	const values = [
		{
			icon: IconHeart,
			title: "Technical excellence",
			description: "We obsess over code quality, system design, and creating elegant solutions to complex automation problems."
		},
		{
			icon: IconUsers,
			title: "Privacy-first mindset",
			description: "Local-only processing and encrypted data storage aren't just features - they're core values that guide every decision."
		},
		{
			icon: IconGlobe,
			title: "Deep focus culture",
			description: "We practice what we preach by maintaining focused work environments and minimizing context switching."
		}
	];
</script>

<!-- Hero Section -->

<SecondaryHero
	title="Build the future of workflow automation"
	subtitle="Join our team of engineers and product builders who are passionate about creating proactive AI that transforms how people work. We're looking for talented individuals who thrive in deep focus environments and want to solve complex technical challenges."
	imageSrc="/generated/image-a-diverse-team-of-developers-working-in-.webp"
/>

<!-- Why Join Us Section -->
<section class={SECTION_BASE_CLASSES}>
	<SectionHeader title="Why join us?" subtitle="Build your career while making an impact" />

	<div class="mt-16 grid gap-4 md:grid-cols-3">
		{#each benefits as benefit}
			<Card {...benefit} />
		{/each}
	</div>
</section>

<!-- Culture Section -->
<Culture {values} />

<Testimonials testimonials={employeeTestimonials} />

<!-- Application Process -->
<section class={SECTION_BASE_CLASSES}>
	<div class="mx-auto">
		<h2 class="text-title1 mb-16">Our application process</h2>

		<div class="grid gap-12 md:grid-cols-3">
			{#each processSteps as { step, title, description }, i}
				<div class="flex flex-col">
					<div class="{ICON_CONTAINER_CLASSES} mb-6 size-11">
						<span class="text-headline">{step}</span>
					</div>
					<h3 class="text-headline mb-3">{title}</h3>
					<p class="text-body text-emphasis-low">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
<!-- Current Openings Section -->
<section class={GRADIENT_BG_CLASSES}>
	<div class="section-px section-py container mx-auto grid w-full items-start lg:grid-cols-2">
		<SectionHeader title="Current openings" subtitle="Find your perfect role" />

		<JobList {openings} />
	</div>
</section>

<script lang="ts">
	import { typewriter, typewriterElements, growOut } from '$lib/animations';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$lib/components/ProjectCard.svelte';
	import FluidGrid from '$lib/components/FluidGrid.svelte';
	import * as m from '$lib/paraglide/messages';

	let visible = $state(false);
	let startTyping = $state(false);
	let startLink = $state(false);

	const {
		data
	}: {
		data: { projects: Project[] };
	} = $props();

	$effect(() => {
		visible = true;
	});

	const more_proj: Project = {
		name: m.fair_still_polecat_pave(),
		description: m.vexed_free_felix_hunt(),
		html_url: '/projects',
		languages: {}
	};
</script>

<div id="title" class="h-screen w-screen">
	{#if visible}
		<div class="md:m-auto h-full md:w-2/3 mx-1 flex flex-row">
			<div
				class="w-full m-auto flex flex-col items-center justify-center gap-y-4 border-b-2 border-t-2 border-black pb-12 pt-12"
				transition:growOut={{ duration: 750, }}
				onintrostart={() => setTimeout(() => startTyping = true, 500)}
			>
				<h1 class="w-full text-clip text-center font-foundation text-7xl">
					{#if startTyping}
						<span transition:typewriter={{ speed: 2 }}>Timotej Kroflic</span>
					{/if}
				</h1>

				{#if startTyping}
					<div class="flex flex-row flex-wrap items-center justify-center">
						<div
							class="flex flex-row items-center gap-x-2"
							transition:typewriterElements={{ speed: 0.5 }}
						>
							<a
								href="https://www.linkedin.com/in/timotej-kroflič-14a908222"
								class="p-1"
								target="_blank"
								aria-label="LinkedIn"
							>
								<i class="fa-brands fa-linkedin-in fa-2x"></i>
							</a>

							<a
								href="mailto:timmy@timkr.si"
								class="p-1 font-mono text-lg font-bold underline"
								aria-label="Email"
							>
								timmy@timkr.si
							</a>

							<a
								href="https://github.com/InternatBlackhole"
								class="p-1"
								target="_blank"
								aria-label="GitHub"
							>
								<i class="fa-brands fa-github fa-2x"></i>
							</a>
						</div>

						<div class="h-2 basis-full"></div>

						<span
							class="whitespace-nowrap font-mono font-bold"
							transition:typewriter={{ speed: 2 }}
							onintroend={() => (startLink = true)}
						>
							{m.sunny_neat_slug_dare()}&nbsp;
						</span>

						{#if startLink}
							<a
								href="https://fri.uni-lj.si/"
								aria-label="UL FRI"
								class="font-mono font-bold underline"
								transition:typewriter={{ speed: 2 }}
							>
								UL FRI
							</a>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>

<div id="projects" class="tk-page h-screen w-screen">
	<div class="m-auto h-full pt-[25vh]">
		<h1 class="pb-3 text-center font-foundation text-7xl">{m.grand_vexed_fox_link()}</h1>
		<FluidGrid max_display={5} data={{ items: data.projects }} class="w-full md:m-auto md:w-2/3">
			{#snippet project_snippet(project)}
				<ProjectCard {project} class="rounded-lg border-2 p-3" />
			{/snippet}

			{#snippet more()}
				<ProjectCard project={more_proj} class="rounded-lg border-2 p-3" target="_self" />
			{/snippet}
		</FluidGrid>
	</div>
</div>

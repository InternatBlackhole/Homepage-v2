<script lang="ts">
	import FluidGrid from '$lib/components/FluidGrid.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$lib/components/ProjectCard.svelte';
	import * as m from '$lib/paraglide/messages';

	const {
		data
	}: {
		data: { projects: Project[] };
	} = $props();
</script>

<svelte:head>
	<title>{m.known_jolly_stingray_reside()}</title>
</svelte:head>

{#if data}
	<FluidGrid data={{ items: data.projects }} class="w-full md:m-auto">
		{#snippet project_snippet(project)}
			<ProjectCard {project} class="h-full rounded-lg border-2 p-3" />
		{/snippet}
	</FluidGrid>
{/if}

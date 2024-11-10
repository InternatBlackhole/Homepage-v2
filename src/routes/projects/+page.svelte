<script lang="ts">
	import FluidGrid from '$lib/components/FluidGrid.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import type { Project } from '$lib/components/ProjectCard.svelte';

	const {
		data
	}: {
		data: { projects: Project[] };
	} = $props();

    const more_proj: Project = {
        name: 'More projects',
        description: 'Click here to see more projects',
        html_url: '/projects',
        languages: {}
    }
</script>

<div class="h-screen w-screen">
	{#if data}
		<FluidGrid data={{items: data.projects}} max_display={5} class="md:m-auto md:w-2/3 w-full">
			{#snippet project_snippet(project)}
				<ProjectCard {project} class="rounded-lg border-2 p-3 h-full" />
			{/snippet}

			<!--{#snippet more()}
                <ProjectCard project={more_proj} class="rounded-lg border-2 p-3 h-full" />
			{/snippet}-->
		</FluidGrid>
	{/if}
</div>

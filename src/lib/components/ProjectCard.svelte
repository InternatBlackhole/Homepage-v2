<script module lang="ts">
	export interface Project {
		name: string;
		description: string;
		short_description?: string;
		html_url: string;
		languages: {
			[language: string]: number;
		};
	}
</script>

<script lang="ts">
	let {
		project,
		class: clazz,
		target = '_blank'
	}: {
		project: Project;
		class: string;
		target?: '_self' | '_blank' | '_parent' | '_top';
	} = $props();
</script>

<a
	class="block {clazz} transition-colors hover:bg-gray-300 [&_span]:hover:bg-gray-400"
	href={project.html_url}
	{target}
	aria-label="Link to project {project.name}"
>
	<div class="inline-flex flex-row items-center w-full mb-1">
		<h3 class="font-bold">{project.name}</h3>
        <div class="ml-auto inline-flex flex-row flex-wrap gap-y-1">
        {#each Object.entries(project.languages) as [language, proportion]}
            <span class="bg-gray-300 text-gray-800 rounded-full p-1 ml-2 text-xs text-nowrap text-center transition-colors">{language} {proportion}%</span>
        {/each}
        </div>
	</div>
	<p>{project.short_description || project.description}</p>
</a>

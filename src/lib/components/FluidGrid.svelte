<script lang="ts" generics="Item">
	import type { Snippet } from 'svelte';

    interface FluidGridProps {
        data: { items: Item[] };
        max_display?: number;
        project_snippet: Snippet<[Item]>;
        more?: Snippet;
		class: string | undefined;
    }

	const {
		data,
		max_display = data.items?.length || 0,
		project_snippet,
		more,
		class: clazz = "",
	}: FluidGridProps = $props();

	let projects = $derived(data.items?.slice(0, max_display) || []);
</script>

<div class="{clazz} grid gap-2 p-2 sm:grid-cols-1 lg:grid-cols-2">
	{#each projects as project}
		{@render project_snippet(project)}
	{/each}
	{#if data.items?.length > max_display}
		{@render more?.()}
	{/if}
</div>

<script lang="ts">
	import type { Snippet } from "svelte";

    const { children }: {
        children: Snippet;
    } = $props();
</script>

<div class="w-full md:grid md:grid-cols-5 block">
    <div class="md:col-start-2 md:col-span-3 lg:col-start-2 lg:col-span-3 items-center m-auto mt-4 mx-1 md:mx-0">
        {@render children()}
    </div>
</div>
<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages';

	//const { data }: { data: PageData } = $props();
</script>

{#if $page.error}
	<h1 class="text-center font-foundation text-5xl">{m.witty_aloof_kudu_compose()}</h1>
	<p class="text-center">{m.away_wacky_bobcat_beam()}: {$page.error.message}</p>
{/if}

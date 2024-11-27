<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { onMount } from 'svelte';
	import { fromEvent, debounceTime } from 'rxjs';
	import { slide } from 'svelte/transition';
	import NavBar from './NavBar.svelte';
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages';

	let { children } = $props();

	interface Item {
		x: number;
		y: number;
		leftLimit: number;
		rightLimit: number;
		color: string;
		passesDone: number;
	}

	const doPasses = 3;

	let canvas: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null;
	const perItem = 150; // px per item
	const boxOffest = 50; // from left and right from center
	const color = '#cccccc';
	let items: Item[] = [];

	onMount(() => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		context = canvas.getContext('2d');
		return fromEvent(window, 'resize')
			.pipe(debounceTime(100))
			.subscribe(() => {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				context = canvas.getContext('2d');
				//context?.clearRect(0, 0, canvas.width, canvas.height);
				draw(0);
			}).unsubscribe;
	});

	function draw(frame: number) {
		if (!context) return;
		const ctx = context;

		items.forEach((item) => {
			if (item.passesDone >= doPasses) return;
			ctx.moveTo(item.x, item.y);
			let xoff = Math.random() * 10 - 5; // -10 to 10
			let yoff = Math.random() * 15; // just increase
			ctx.strokeStyle = item.color;
			item.y += yoff;
			if (item.y > canvas.height) {
				item.y = 0;
				item.passesDone++;
				item.x = item.rightLimit + boxOffest;
				return;
			}

			if (item.x + xoff < item.leftLimit || item.x + xoff > item.rightLimit) {
				xoff *= -1;
			}

			item.x += xoff;
			ctx.lineTo(item.x, item.y);
			ctx.stroke();
		});

		const allDone = items.every((item) => item.passesDone >= doPasses);
		if (!allDone) requestAnimationFrame(() => draw(frame + 1));
	}

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const itemsNum = Math.ceil(window.innerWidth / perItem);

		items = Array.from({ length: itemsNum + 1 }, (_, i) => {
			const leftLimit = i * perItem;
			const x = leftLimit + boxOffest;
			const rightLimit = x + boxOffest;
			const y = 0; //(Math.random() / 2) * canvas.height;

			return { x, y, color, passesDone: 0, leftLimit, rightLimit } as Item;
		});
		draw(0);
	});

	/*let navVisible = $state(false);

	onMount(() => {
		return fromEvent(window, 'scroll')
			.pipe(debounceTime(10))
			.subscribe(() => {
				navVisible = (window.scrollY >= (window.visualViewport?.height || 1) / 100 * 10) || false; //5vh
			}).unsubscribe;
	});*/
</script>

<svelte:head>
	<title>Timotej Kroflic</title>
	<meta name="description" content="Timotej Kroflič's {m.mad_cozy_chipmunk_pick()}" />
	<meta name="keywords" content="Timotej Kroflič, {m.mad_cozy_chipmunk_pick()}" />
	<meta name="author" content="Timotej Kroflič" />
</svelte:head>

<ParaglideJS {i18n}>
	<div class="w-screen">
		<!--<NavBar entries={[
			{ name: m.every_patchy_alligator_feast(), href: '/projects' },
		]} loggedInUser={null} />-->
		{@render children()}
	</div>
</ParaglideJS>

<canvas bind:this={canvas} id="canvas" class="fixed left-0 top-0 -z-50 h-screen w-screen opacity-40"
></canvas>

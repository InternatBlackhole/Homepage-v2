// See https://svelte.dev/docs/kit/types#app.d.ts

import type { ParaglideLocals } from '@inlang/paraglide-sveltekit';
import type { AvaliableLanguages } from '$lib/paraglide/runtime';
//import type { NavEntry } from './routes/NavBar.svelte';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			paraglide: ParaglideLocals<AvaliableLanguages>;
		}
		interface PageData {
			navShown: boolean;
			//navEntries: NavEntry[];
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

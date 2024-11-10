// See https://svelte.dev/docs/kit/types#app.d.ts

import type { ParaglideLocals } from "@inlang/paraglide-sveltekit";
import type { AvaliableLanguages } from "$lib/paraglide/runtime";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			paraglide: ParaglideLocals<AvaliableLanguages>;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

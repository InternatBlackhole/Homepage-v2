import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				foundation: ['"Foundation Titles"', 'sans-serif'],
				protomolecule: ['"Protomolecule"', 'sans-serif'],
				sans: ['"Roboto"', ...fontFamily.sans],
				mono: ['"Cutive Mono"', 'monospace', ...fontFamily.mono],
			}
		}
		
	},

	plugins: [typography, forms]
} satisfies Config;

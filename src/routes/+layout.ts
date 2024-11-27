import type { Project } from '$lib/components/ProjectCard.svelte';

export async function load(): Promise<{ projects: Project[] }> {
    return { projects: [
        {
            name: 'CudaGo',
            description: 'Tool to get CUDA source code runnable in Golang.',
            html_url: 'https://github.com/InternatBlackhole/cudago',
            languages: {
                Go: 100
            }
        },
        {
            name: 'Recipes App Android',
            description: 'Android app that displays recipes from an API with favorite recipies available offline.',
            html_url: 'https://github.com/InternatBlackhole/recipes-android-app',
            languages: {
                Kotlin: 100
            }
        },
        {
            name: 'Homepage',
            description: 'The homepage you are currently on. Made with SvelteKit.',
            html_url: 'https://github.com/InternatBlackhole/Homepage-v2',
            languages: {
                TypeScript: 37.6,
                Svelte: 44.4,
                Tailwind: 5.7,
                JavaScript: 8.1,
                HTML: 4.2
            }
        },
        {
            name: 'Raft with chain replication',
            description: 'Chain replication with Raft consensus algorithm in Go.',
            html_url: 'https://github.com/InternatBlackhole/raft-with-chain-replication',
            languages: {
                Go: 91.7,
                Shell: 6.9,
                Makefile: 1.4
            }
        },
        {
            name: 'Simple shell',
            description: 'Simple shell implementation in C.',
            html_url: 'https://github.com/InternatBlackhole/simple-shell',
            languages: {
                C: 100
            }
        },
        {
            name: 'SIC simulator',
            description: 'SIC simulator in C++',
            html_url: 'https://github.com/InternatBlackhole/sic-simulator',
            languages: {
                'C++': 77,
                Assembly: 21.5,
                Makefile: 1.5
            }
        },
    ]
}
}

export const prerender = true;

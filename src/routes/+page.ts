import type { PageLoad } from "./$types";

export const load: PageLoad = async ({parent}) => {
    const p = await parent();
    return {
        ...p,
        navShown: false,
    }
};
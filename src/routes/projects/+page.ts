import type { PageLoad } from "./$types";

export const load: PageLoad = async ({parent}) => {
    const pData = await parent();
    return {
        ...pData,
        navShown: true
    }
}
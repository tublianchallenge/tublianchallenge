

import { page } from "$lib/stores/model";

export let gotoPage = (pageNumber: number) => {
    page.set(pageNumber);
}
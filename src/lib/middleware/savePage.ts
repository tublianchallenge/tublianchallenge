

import { page } from "$lib/stores/model";

export let savePage = (pageNumber: number) =>{
    window.localStorage.setItem("page", String(pageNumber));
}

export let gotoPage = (pageNumber: number) => {
    savePage(pageNumber);
    page.set(pageNumber);
}
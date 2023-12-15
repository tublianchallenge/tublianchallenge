
import { browser } from "$app/environment"
import {page} from "$lib/stores/model"

export function gotoPage(page){
    if (browser){
        window.localStorage.setItem("page", `${page}`);
    }
    console.log("moving page")
}
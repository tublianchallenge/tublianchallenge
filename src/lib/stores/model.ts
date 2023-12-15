
import { browser } from '$app/environment';
import { writable } from "svelte/store";



export let page = writable(1);
export let dateCreated: Date;
export let firstName = writable("First Name");
export let lastName = writable("Last Name");

if(browser){
    
    const storedPage = window.localStorage.getItem("page");
     
    if (storedPage !== null) {
        page.set(parseInt(storedPage, 10) || 1);
    } else {
        page.set(1); // Default value if localStorage doesn't have "page"
    }

    firstName.set(window.localStorage.getItem("firstName") || "First Name");
    lastName.set(window.localStorage.getItem("lastName") || "Last Name");
}

export let email = writable("");  //find way to validate later (maybe zod?)
export let password = writable(""); //needs encryption, impleme
export let reason = writable("");
export let paymentPlan = writable(0);


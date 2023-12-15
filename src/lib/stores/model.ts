
import { browser } from '$app/environment';
import { writable } from "svelte/store";



export let page = writable(1);
export let firstName = writable("First Name");
export let lastName = writable("Last Name");

if(browser){  
    if(window.localStorage.getItem("page") != null){
        page.set(parseInt(window.localStorage.getItem("page") || "1"));
    } 
    firstName.set(window.localStorage.getItem("firstName") || "First Name");
    lastName.set(window.localStorage.getItem("lastName") || "Last Name");
}

export let dateCreated: Date;
export let email = writable("");  //find way to validate later (maybe zod?)
export let password = writable(""); //needs encryption, impleme
export let reason = writable("");
export let plan = writable(0);


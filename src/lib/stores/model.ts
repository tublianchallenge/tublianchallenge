
import { writable } from "svelte/store";

export let dateCreated: Date;
export let firstName = writable("");
export let email = writable("");  //find way to validate later (maybe zod?)
export let password = writable(""); //needs encryption, impleme
export let reason = writable("");
export let paymentPlan = writable(0);


import { writable } from 'svelte/store';
export let viewModel = writable({
    page: 1,
    //signup needs to implement google signup
    user: {
        dateCreated: Date(),
        firstName: String(undefined),
        lastName: String(undefined),
        email: String(undefined), //find way to validate later (maybe zod?)
        password: String(undefined), //needs encryption, implement
        reason: Number(undefined)  // why tublian (team, personal projects or recruiting)
    },
    //making this a structure soit can be lowered or increased easily later
    paymentPlan: {
        time: Boolean, // annual or monthly,
        type: Number(undefined)

    }
})
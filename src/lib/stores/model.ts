import { writable } from 'svelte/store';

export let profile_group = writable(1);

function postgresDatetime() : String{
    let dateToStringConversion = new Date()
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ');
    return dateToStringConversion;
}

export let viewModel = writable({

    //TODO
    //signup needs to implement google signup
    user: {
        dateCreated: Date(),
        firstName: String(undefined),
        lastName: String(undefined),
        email: String(undefined), //find way to validate later (maybe zod?)
        password: String(undefined), //needs encryption, implement
        reason: String(undefined)  // why tublian (team, personal projects or recruiting)
    },

    //making this a structure soit can be lowered or increased easily later
    paymentPlan: {
        professional: Number(19.99),
        business: Number(49.99),
        custom: Number(undefined)
    },

   
})
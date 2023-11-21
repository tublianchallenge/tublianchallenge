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


    user_profile: {
        dateCreated: Date(),
        firstName: String(undefined),
        lastName: String(undefined),

    
    },

    radioCards :[
        { id: 1, checked: false, radioBackground: "transparent", radioCardBorder: "linear-gradient(#292929, #292929)" },
        // Add more objects for each radio card
    ],
    user:{
        firstname: undefined,
        lastname: undefined
    },
    groups: {
        payment: {
            monthly: 1,
            plan: 2
        },
        profile: 3
    }
})
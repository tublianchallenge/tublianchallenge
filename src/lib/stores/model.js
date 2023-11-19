import { writable } from 'svelte/store';

export let profile_group = writable(1);
export let viewModel = writable({
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
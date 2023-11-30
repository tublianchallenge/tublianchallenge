
const viewModel = () =>{
    
    const state = {
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
            time: Boolean(undefined), // annual or monthly,
            type: Number(undefined)
    
        }
    }
}
// export let viewModel = writable({

// })
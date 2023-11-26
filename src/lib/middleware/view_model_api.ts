import { viewModel } from "$lib/stores/model";
import type { Writable } from "svelte/store";


export class ViewModelApi{
    constructor (
        private model: Writable<{}> = viewModel
    ){}
    
    
}
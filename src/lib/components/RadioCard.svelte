<script lang="ts">
    import { onMount } from "svelte";


    export let img = String(undefined)
    export let title = String(undefined)
    export let description = String(undefined)
    export let group: number = Number(undefined)
    export let value: number = Number(undefined)

    export let checked: boolean= Boolean(undefined);
    
    let classes = "radio-card-border-wrap p-[1px] bg-[#292929] rounded-[20px]"
    
    onMount(async () => {
		if (checked == false) {
            classes="radio-card-border-wrap p-[1px] bg-[#292929] rounded-[20px]"
        }else{
            classes="radio-card-border-wrap p-[1px] bg-gradient-to-br from-[#F5C370] to-[#DB50B1] rounded-[20px]"
        }

	});

    // function getChecked(event: ){
    //     checked = event.target.checked;
    // }


    function handleClick(){
        if (!checked) {
            classes="radio-card-border-wrap p-[1px] bg-gradient-to-br from-[#F5C370] to-[#DB50B1] rounded-[20px]" 
            return
        }
        checked = !checked;
        classes="radio-card-border-wrap p-[1px] bg-[#292929] rounded-[20px]"
    }
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label on:click={handleClick} class={classes}>

    <div class="bg-[#1E1E1E] w-[250px] h-[288px] py-[14px] px-[38px] flex flex-col border-1 rounded-[20px] relative hover:bg-[#292929] hover:cursor-pointer">
  
        <input checked={checked} type="radio" bind:group {value} class="absolute top-[14px] left-[212px]">

        <div class="flex flex-row justify-center max-h-[128px] w-full mt-[25px]">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="{img}"/>
        </div>
        <div class="flex justify-center w-full text-[#FEFEFE] mt-[10px] mb-[6px]">
            <h1 class="font-[700] font-space-grotesk text-[24px] whitespace-nowrap leading-[34px]">{title}</h1>
        </div>
        <div class="flex flex-row justify-center w-full text-[#CFCFCF]">
            <p class="font-space-grotesk text-center text-[16px] font-[500] text-[#CFCFCF]leading-[24px] w-[210px] shrink-0">{description}</p>
        </div>
    </div>
</label>

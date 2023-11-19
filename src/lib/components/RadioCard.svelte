<script lang="js">
    import { onMount } from 'svelte';
    export let description = ""
    export let img = ""
    export let title = ""
    export let group = undefined
    export let value = undefined

    export let checked = false;
    
    let classes = "radio-card-border-wrap p-[1px] bg-[#292929] rounded-[20px]"

    onMount(async () => {
		if (!checked) {
            classes="radio-card-border-wrap p-[1px] bg-[#292929] rounded-[20px]"
    
        }else{
            classes="radio-card-border-wrap p-[1px] bg-gradient-to-br from-[#F5C370] to-[#DB50B1] rounded-[20px]"
        }
    
	});

    function handleClick(event) {
    
    if (checked == false) {
        classes="radio-card-border-wrap p-[1px] bg-[#292929] rounded-[20px]"
      return
    }
    checked = !checked;
    classes="radio-card-border-wrap p-[1px] bg-gradient-to-br from-[#F5C370] to-[#DB50B1] rounded-[20px]"
   
    console.log("unchecked")
    
  }
</script>


<label on:click={handleClick} class={classes}>

    <div class=" bg-[#1E1E1E] w-[250px] h-[288px] py-[14px] px-[38px] flex flex-col border-1 rounded-[20px] relative hover:bg-[#292929] hover:cursor-pointer">
  
        <input checked={checked} type="radio" bind:group {value} class="absolute top-[14px] left-[212px]">

        <div class="flex flex-row justify-center max-h-[128px] w-full mt-[25px]">
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

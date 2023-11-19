<script lang="ts">

    import { onMount } from "svelte";
    export let img = String(undefined)
    export let title = String(undefined)
    export let description = String(undefined)
    export let group: number = Number(undefined)
    export let value: number = Number(undefined)
    export let checked: boolean= Boolean(undefined);
    
    const radioCardColors = {
        radio:{
            active: "linear-gradient(#F5C370, #DD58AC)",
            hover: "linear-gradient(to left, #1E1E1E, #1E1E1E)",
            inactive: "linear-gradient(#transparent, transparent)"
        },
        border: {
            active: "linear-gradient(#F5C370, #DD58AC)",
            inactive:"linear-gradient(#292929, #292929)"
        }
    }

    let radioBackground: string = radioCardColors.radio.inactive
    let radioCardBorder: string = radioCardColors.border.inactive;

    function initializeRadioState(){
        if (checked == true) {
            radioBackground = radioCardColors.radio.active
            radioCardBorder = radioCardColors.border.active
        }else{
            radioBackground = radioCardColors.radio.inactive
            radioCardBorder = radioCardColors.border.inactive
        }
    }

    onMount(async () => {
		initializeRadioState()

        setInterval((() =>{
            if (checked == false) {
            radioBackground = radioCardColors.radio.inactive
            radioCardBorder = radioCardColors.border.inactive
            return
        }
        }), 100);
	});

    function handleClick(){
        if (checked == true) {
            radioBackground = radioCardColors.radio.active
            radioCardBorder = radioCardColors.border.active
            return
        }
        checked = !checked;
        radioBackground = radioCardColors.radio.inactive
        radioCardBorder = radioCardColors.border.inactive
    }
</script>


<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label on:click={handleClick} class="radio-card-border-wrap p-[1px] rounded-[20px]"
    style="background-image: {radioCardBorder};">

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
    class="bg-[#1E1E1E] w-[250px] h-[288px] py-[14px] px-[38px] flex flex-col border-1 rounded-[20px] relative hover:bg-[#292929] hover:cursor-pointer">
        
        <div>
            <input checked={checked} type="radio" bind:group {value} class="absolute top-[14px] left-[212px]" style="opacity: 0;">

            <div class="radio-box absolute top-[14px] 
            left-[212px] w-[24px] h-[24px] rounded-full
             border border-1 border-[#292929]" style="background-image: {radioBackground};">
            </div>
        </div>
        

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

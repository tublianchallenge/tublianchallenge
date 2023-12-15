<script lang="ts">
    import Button from "../buttons/Button.svelte";
    export let id: string="1"; 
    export let cost = "19.99"; 
</script>


    <div class="relative w-full radio-card font-space-grotesk h-[464px] md:h-[464px] md:w-[301px]">
            <input type="radio" name="use" {id} class="w-full h-full">
            <div class="top-0 left-0 z-20 w-full h-full  rounded-[20px] pointer-events-none ">
                <div class="relative w-full h-full  rounded-l-[20px] flex flex-col p-4 gap-[15px]">       
                        <div class="flex z-20 flex-col gap-3">
                            {#if cost !== "custom"}
                             <div class="flex flex-row">
                                <p class="text-4xl font-[700] text-[#FEFEFE]/90">${cost}</p>
                                <p class="text-lg text-[#B7B7B7]">/Monthly</p>
                             </div>
                                
                            {:else}
                             
                            <div class="flex flex-row">
                                <p class="text-xl font-[700] text-[#FEFEFE]/90">Custom Pricing</p>
                                <p class="text-lg text-[#B7B7B7]">/Monthly</p>
                             </div>
                                
                            {/if}
                            <p  class="text-xl text-[#B7B7B7] font-[500]">Features:</p> 
                            <slot/> 
                            <Button></Button>
                        </div>  
                </div> 
            </div>;
    </div>


<style>
    input[type="radio"]{
        -webkit-appearance: none;
        appearance: none;
        background-color:#1E1E1E;
        border-radius: 20px;
        top: 0;
        left: 0;
        position: absolute;
        cursor: pointer;
        outline: none;
        width: 301px;
        height: 464px;
    }

    input[type="radio"]:before{
        content: "";
        position: absolute;
        height: 24px;
        width: 24px;
        background: transparent;
        border: none;
        border-radius: 50%;
        top: 38px;
        right: 20px;
    }

    input[type="radio"]:after{
        content: "";
        position: absolute;
        height: 24px;
        width: 24px;
        background: transparent;
        border-radius: 50%;
        top: 38px;
        right: 20px;
    }

    input[type="radio"]:checked{
        background: linear-gradient(#1E1E1E, #1E1E1E) padding-box,
                    linear-gradient( to right bottom,#FDD648 , #DB50B1) border-box;
        border-radius: 20px;
        border: 1px solid transparent;
    }
    input[type="radio"]:checked:after{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 2px;
        content: url("/img/checkbox/check.svg");
        background: linear-gradient( to right bottom,transparent, transparent);
    }
</style>
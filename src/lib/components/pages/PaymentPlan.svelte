
<script lang="ts">
    import Button from "../buttons/Button.svelte";
import Feature from "../inputs/Feature.svelte";
    import RadioCard from "../inputs/RadioCard.svelte";
    import RadioCardPayment from "../inputs/RadioCardPayment.svelte";
    import Navbar from "../main/Navbar.svelte";

    export const cost = "";
    let plan = 1;

    
</script>

<div class="px-[16px] py-[25px] flex flex-col justify-start h-full w-full gap-[20px] items-center ">

     
    <Navbar page={4}/>


    <div class="flex flex-col items-center w-full">
        <p class="text-white/90 font-space-grotesk text-[20px] font-[700] mt-[20px] text-center">Payment Plan</p>
         <p class="text-center text-white/80 font-space-grotesk w-[379px]">We will customize your experience based on your option.</p>
      </div>

      <div class="flex flex-col items-center w-full h-full">

        <!-- switch -->
        {#if plan == 1}
        <!-- monthly select -->
        <div class="w-[360px] h-[48px] rounded-[10px] bg-[#292929] flex flex-row mt-4 mb-10 p-1">
            
            <div class="w-[50%] h-full bg-gradient-to-br from-[#FBDA61] to-[#FF5ACDD6] rounded-[10px] flex flex-row items-center justify-center">
                <button class="text-xl font-[500] text-[#FEFEFE]/80"
                on:click={() => {plan = 1}}>Monthly</button>
            </div>
            <div class="w-[50%] h-full bg-transparent rounded-[10px] flex flex-row items-center justify-center">
                <button class="text-xl font-[500] text-[#FEFEFE]/80 flex flex-row  items-center gap-2 "
                on:click={() => {plan = 2}}>Annually 
                <div class="text-xs bg-[#445742] rounded-[33px] py-[4px] px-[6px]
                text-[#76F368]">20% off</div>
                </button>
            </div>   
        </div>
        {:else}
        <!-- yearly select -->
        <div class="w-[360px] h-[48px]  rounded-[10px] bg-[#292929] flex flex-row mt-4 mb-10 p-1">
            
            <div class="w-[50%] h-full bg-transparent rounded-[10px] flex flex-row items-center justify-center">
                <button class="text-xl font-[500] text-[#FEFEFE]/80"
                on:click={() => {plan = 1}}>Monthly</button>
            </div>

            <div class="w-[50%] h-full bg-gradient-to-br from-[#FBDA61] to-[#FF5ACDD6]  rounded-[10px] flex flex-row items-center justify-center">
                <button class="text-xl font-[500] text-[#FEFEFE]/80"
                on:click={() => {plan = 2}}>Annually</button>
            </div>   
        </div>
        {/if}

        <div class="flex flex-col gap-4 justify-center items-center w-full h-full md:flex-row">
            <RadioCardPayment cost={"19.99"}>
                <Feature>Advanced search for developer profiles with filters.</Feature>
                <Feature>Increased monthly messages to developers.</Feature>
                <Feature>Priority support.</Feature>    
            </RadioCardPayment> 

            <RadioCardPayment cost={"49.99"}>
                <Feature>Premium access to developer profiles and advanced search filters.</Feature>
                <Feature>Increased monthly messages to developers.</Feature>
                <Feature>Dedicated account manager for personalized support.</Feature>
                <Feature>Early access to new features and updates.</Feature>
            </RadioCardPayment>

            <RadioCardPayment>
                <Feature>Tailored solutions for large enterprises or agencies.</Feature>
                <Feature>Full access to all platform features, including custom integrations.</Feature> 
                <Feature>Unlimited monthly messages to developers.</Feature>
                <Feature>Priority support with 24/7 availability.</Feature> 
            </RadioCardPayment>
            
        </div>
        
      </div>
</div>
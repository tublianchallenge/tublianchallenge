<script lang="ts">
    import { browser } from '$app/environment';
    import { firstName, lastName , page} from "$lib/stores/model";
    import Button from "../buttons/Button.svelte";
    import AccountQuestion from "../main/AccountQuestion.svelte";
    import Navbar from "../main/Navbar.svelte";
    /**
     * @param {{ target: { firstName: { value: string; }; lastName: { value: string; }; }; }} event
     */

    export let form: FormData;
    
    $: $firstName, saveNames();
    $: $lastName, saveNames();

    function init(el){
      el.focus()
    } 
    
    function saveNames(){
      if(browser){
        window.localStorage.setItem("firstName", $firstName);
        window.localStorage.setItem("lastName", $lastName);
      }
    }
    
</script>
 
<div class="flex flex-row">
    <div>
      <img src="/img/pages/first.png" alt="" class="hidden h-screen md:block md:min-w-[48vw]">
    </div>

    <div  class="px-[16px] py-[25px] flex flex-col justify-start h-full w-full gap-[20px] items-center">
      
      <Navbar/>

      <div class="flex flex-col px-[16px] gap-[5px] w-full">
        <p class="text-white/90 font-space-grotesk text-[20px] font-[700] mt-[20px]">Get Started</p>
        <p class="text-white/80 font-space-grotesk">Start recruiting streetcred developers, Today!!</p>
      </div>

      <div class="px-[16px] w-full">

        {#if $firstName.length <= 0}
        
          <input id="firstName" placeholder="First Name" bind:value={$firstName} type="text" class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#d61a1abe] placeholder-[#888888bb] py-4 pl-2 outline-none use:init">
          <p class="py-1 text-[rgba(214,26,26,0.75)] font-space-grotesk" use:init>first name required</p>
        {:else}
          <input id="firstName" placeholder="First Name" bind:value={$firstName} type="text" class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#888888] placeholder-[#888888bb] py-4 pl-2 outline-none" use:init>
        {/if}
        {#if $lastName.length <= 0}  
          <input id="lastName" placeholder="Last Name" bind:value={$lastName} type="text" class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px]  border-[#d61a1abe] placeholder-[#888888bb] py-4 pl-2 outline-none " use:init>
          <p class="py-1 text-[rgba(214,26,26,0.75)] font-space-grotesk">last name required</p>
        {:else}
          <input id="lastName" placeholder="Last Name" bind:value={$lastName} type="text" class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#888888] placeholder-[#888888bb] py-4 pl-2 outline-none focus: first-letter:" use:init>
        {/if}
      </div>
      {#if $firstName.length <= 0 || $lastName.length <= 0} 
          <div class="px-[16px] w-full flex flex-col gap-[10px]">
            <Button type={"button"} >Proceed</Button>
          </div>
        {:else}
          <div class="px-[16px] w-full flex flex-col gap-[10px]">
            <Button on:click={ () => {
              window.localStorage.setItem("page","2");
              page.set(2)}} type={"button"}>Proceed</Button>
          </div>
      {/if}
      <div class="px-[16px] w-full flex flex-row justify-start">
        <AccountQuestion/>
      </div>

      <div class="flex font-space-grotesk flex-row gap-[15px] pt-32 md:pt-56 items-end px-4 w-full  grow text-[#AAAAAA]">
        <a href="https://www.tublian.com/privacy">Privacy Policy</a>
        <a href="https://www.tublian.com/terms">Terms</a>
    </div>
  </div>

  
</div>
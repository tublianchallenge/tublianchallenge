<script lang="ts">
  import { browser } from "$app/environment";
import Button from "$lib/components/buttons/Button.svelte";
  import AccountQuestion from "$lib/components/main/AccountQuestion.svelte";
  import Navbar from "$lib/components/main/Navbar.svelte";
  import { email, firstName, lastName, page, password } from "$lib/stores/model";
  import Loading from "./Loading.svelte";
  export let form: FormData;

  console.log(form)
  function saveState(page){
    if(browser){
      window.localStorage.setItem("page", `${page}`)
    }
  }
</script>

 
  
<div class="flex flex-row">
  
  <div>
    <img src="/img/pages/second.png" alt="" class="hidden h-screen md:block md:min-w-[45vw]">
  </div>

  <div class="px-[16px] py-[25px] flex flex-col justify-start h-full w-full  items-center">
    
    {#if form?.page}
        {page.set(form?.page)}
        {saveState("3")}
         
      {/if}
    <Navbar page={2}/>


    <div class="flex flex-col gap-[5px] w-full">
      <p class="text-white/90 font-space-grotesk text-[20px] font-[700] mt-[20px]">Create Account</p>
       <p class="text-white/80 font-space-grotesk">Creating account for <button class="text-[#4AA3FF]" on:click={() => page.set(1)}>@{$firstName} {$lastName}</button></p>
    </div>
    
    <form action="?/signUp" method="post" class="flex flex-col justify-start items-start w-full h-full">
      
    
      <div class="flex flex-col items-start w-full">
        {#if form?.errors?.email}
          <input name="email" id="email" placeholder="Email" bind:value={$email} type="text" class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#d61a1abe] placeholder-[#888888bb] py-4 pl-2 outline-none">
          <p class="py-1 text-[rgba(214,26,26,0.75)] font-space-grotesk">email needs to be at least 6 characters</p>
          <p class="py-1 text-[rgba(214,26,26,0.75)] font-space-grotesk">email format may be invalid</p>
        {:else}
          <input name="email" id="email" placeholder="Email" bind:value={$email} type="text" class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#888888] placeholder-[#888888bb] py-4 pl-2 outline-none">
        {/if}
        
        {#if form?.errors?.password}
          <input name="password" id="password" placeholder="Password" type="password" bind:value={$password}  class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#d61a1abe] placeholder-[#888888bb] py-4 pl-2 outline-none">
          <p class="py-1 text-[#d61a1abe] font-space-grotesk">password needs to be at least 6 characters</p>
        {:else}
          <input name="password" id="password" placeholder="Password" type="password" bind:value={$password}  class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#888888] placeholder-[#888888bb] py-4 pl-2 outline-none">
        {/if}
        <input id="first_name" name="first_name" class="hidden" type="text" value={$firstName}>
        <input id="last_name" name="last_name" class="hidden" type="text" value={$lastName}>
      </div>
       
      <div class="w-full pt-[20px]">
        <Button type={"submit"}>Create Account</Button>
      </div>
    </form>

    <div class="my-1 w-full">
      <div class="flex flex-row items-center w-full md:w-[405px]">
        <div class="grow h-[1px] bg-slate-500/40"></div>
        <p class="text-white/50 font-space-grotesk text-[15px] m-2 font-thin">Or</p>
        <div class="grow h-[1px] bg-slate-500/40"></div>
      </div>
    </div>
    
    <form method="post" class="w-full">
        <Button formaction={"?/signUp&provider=google"} type={"submit"} category={"google"}>Sign up with google</Button>
    </form>
    
    <div class="my-10 w-full">
      <AccountQuestion/>
    </div>
  </div>
</div>
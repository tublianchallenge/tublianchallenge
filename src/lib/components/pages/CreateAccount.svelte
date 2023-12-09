<script lang="ts">
  import { goto } from "$app/navigation";

    
  import Button from "$lib/components/buttons/Button.svelte";
  import AccountQuestion from "$lib/components/main/AccountQuestion.svelte";
  import Navbar from "$lib/components/main/Navbar.svelte";
  import { email, firstName, lastName, password } from "$lib/stores/model";
  import { onMount } from 'svelte';

  onMount(async () =>{
    console.log(`first name is ${$firstName}`);
  });

  
  function updateCredentials(event){
      $email = event.target.email.value;
      $password = event.target.password.value;
    }

  function nextPage(){
    goto("/setup");
  }
</script>
    
<div class="flex flex-row">
  
  <div>
    <img src="/img/pages/second.png" alt="" class="hidden h-screen md:block md:min-w-[45vw]">
  </div>

  <div class="px-[16px] py-[25px] flex flex-col justify-start h-full w-full gap-[20px] items-center">
    
    <Navbar page={2}/>

    <div class="flex flex-col gap-[5px] w-full">
      <p class="text-white/90 font-space-grotesk text-[20px] font-[700] mt-[20px]">Create Account</p>
      <p class="text-white/80 font-space-grotesk">Creating account for <span class="text-[#4AA3FF]">@{$firstName} {$lastName}</span></p>
    </div>
    
    <div class="flex flex-col items-start w-full">
      <input id="email" placeholder="Email" bind:value={$email} type="text" class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#888888] placeholder-[#888888bb] py-4 pl-2 outline-none">

      <input id="password" placeholder="Password" type="password" bind:value={$password}  class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#888888] placeholder-[#888888bb] py-4 pl-2 outline-none">
    </div>
    
    <div class="w-full">
      <Button type={"submit"}>Create Account</Button>
      <div class="flex flex-row items-center w-full md:w-[405px]">
        <div class="grow h-[1px] bg-slate-500/40"></div>
        <p class="text-white/50 font-space-grotesk text-[15px] m-2 font-thin">Or</p>
        <div class="grow h-[1px] bg-slate-500/40"></div>
      </div>
      <Button category={"google"}>Sign up with google</Button>
    </div>
    <AccountQuestion/>
  </div>
</div>
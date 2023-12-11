<script lang="ts">
    
  
    
  import Button from "$lib/components/buttons/Button.svelte";
  import AccountQuestion from "$lib/components/main/AccountQuestion.svelte";
  import Navbar from "$lib/components/main/Navbar.svelte";
  import { email, firstName, lastName, password } from "$lib/stores/model";

  import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
  import { createClient } from '@supabase/supabase-js';
  
  const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
  
  async function signUp(event){
    console.log($email, $password);
    if(event.target){
      const { data, error } = await supabase.auth.signUp({
      email: event.target.email.value,
      password: event.target.password.value,
      });
    }
  }
  
  function updateCredentials(event){
    event.preventDefault();
    $email = event.target.email.value;
    $password = event.target.password.value;
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
    
    <form  on:submit|preventDefault={signUp}  class="flex flex-col justify-start h-full w-full gap-[20px] items-start">

      <div class="flex flex-col items-start w-full">
        <input name="email" id="email" placeholder="Email" bind:value={$email} type="text" class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#888888] placeholder-[#888888bb] py-4 pl-2 outline-none">
 ; 
        <input name="password" id="password" placeholder="Password" type="password" bind:value={$password}  class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#888888] placeholder-[#888888bb] py-4 pl-2 outline-none">
      </div>
      
      <div class="w-full">
        <Button type={"submit"}>Create Account</Button>
        <div class="flex flex-row items-center w-full md:w-[405px]">
          <div class="grow h-[1px] bg-slate-500/40"></div>
          <p class="text-white/50 font-space-grotesk text-[15px] m-2 font-thin">Or</p>
          <div class="grow h-[1px] bg-slate-500/40"></div>
        </div>
        <Button type={"button"} category={"google"}>Sign up with google</Button>
      </div>
    </form>
    
    <AccountQuestion/>
  </div>
</div>
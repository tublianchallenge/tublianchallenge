<script lang="ts">

  import Button from "$lib/components/buttons/Button.svelte";
  import Text from "$lib/components/inputs/Text.svelte";
  import AccountQuestion from "$lib/components/main/AccountQuestion.svelte";
  import Navbar from "$lib/components/main/Navbar.svelte";
  import { email, page, password } from "$lib/stores/model";
  
  function updateCredentials(event){
      $email = event.target.email.value;
      $password = event.target.password.value;
    }

    async function hashPassword(password: string){

      return await 
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
      <p class="text-white/80 font-space-grotesk">Creating account for <span class="text-[#4AA3FF]">@John Doe</span></p>
    </div>
    <form action="" class="flex flex-col gap-[20px] items-start w-full" on:submit|preventDefault={() => {
      $page = 3;
      updateCredentials;
      }}>
    <div class="flex flex-col items-start w-full">
      <Text id={"email"} placeholder={"Email"} name={"email"}></Text>
      <Text  type={"password"} id={"password"} placeholder={"Password"} name={"password"}></Text>
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
    </form>
    <AccountQuestion/>
  </div>
</div>
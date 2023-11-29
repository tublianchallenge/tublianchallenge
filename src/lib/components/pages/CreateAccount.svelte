<script>
    import Text from "$lib/components/inputs/Text.svelte";
    
        import Button from "$lib/components/buttons/Button.svelte";
        import AccountQuestion from "$lib/components/main/AccountQuestion.svelte";
        import Navbar from "$lib/components/main/Navbar.svelte";
    
        function nextPage(){

        }
      </script>
    
    <div id="page-wrapper" class="px-[16px] py-[25px] flex flex-col justify-start h-full w-full gap-[20px] items-center">
        
      <Navbar page={2}/>
      <div class="flex flex-col gap-[10px] w-full">
        <p class="text-white/90 font-space-grotesk text-[20px] font-[700] mt-[20px]">Create Account</p>
        <p class="my-2 text-white/80 font-space-grotesk">Creating account for <span class="text-[#4AA3FF]">@John Doe</span></p>
      </div>
    
      
      <Text placeholder={"Email"} name={"email"}></Text>
      <Text placeholder={"Password"} name={"password"}></Text>
      <Button type={"submit"}>Create Account</Button>
      <div class="flex flex-row items-center w-full">
        <div class="grow h-[1px] bg-slate-500/40"></div>
        <p class="text-white/50 font-space-grotesk text-[10px] m-2 font-thin">Or</p>
        <div class="grow h-[1px] bg-slate-500/40"></div>
      </div>
      <Button category={"google"}>Sign up with google</Button>
      <AccountQuestion/>


    </div>
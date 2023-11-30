<script>
    import Button from "$lib/components/buttons/Button.svelte";
    import Text from "$lib/components/inputs/Text.svelte";
    import AccountQuestion from "$lib/components/main/AccountQuestion.svelte";
    import Navbar from "$lib/components/main/Navbar.svelte";
</script>
    
<div class="flex flex-row">

  <div>
    <img src="/img/pages/first.png" alt="" class="hidden h-screen md:block md:min-w-[45vw] ">
  </div>
  
  <div  class="px-[16px] py-[25px] flex flex-col justify-start h-full w-full gap-[20px] items-center">
    <Navbar/>
    <div class="flex flex-col px-[16px] gap-[5px] w-full">
      <p class="text-white/90 font-space-grotesk text-[20px] font-[700] mt-[20px]">Get Started</p>
      <p class="text-white/80 font-space-grotesk">Start recruiting streetcred developers, Today!!</p>
    </div>

    <div class="px-[16px]">
    <Text placeholder={"First Name"} name={"firstName"}></Text>
    <Text placeholder={"Last Name"} name={"lastName"}></Text>
    
    </div> 
    <div class="px-[16px] w-full flex flex-col gap-[10px]">
      <Button>Proceed</Button>
      <AccountQuestion/>
    </div> 
  </div>

</div>
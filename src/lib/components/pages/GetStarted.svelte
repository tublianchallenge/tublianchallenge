<script>
    import { goto } from '$app/navigation';
    import { firstName, lastName } from "$lib/stores/model";
    import Button from "../buttons/Button.svelte";
    import AccountQuestion from "../main/AccountQuestion.svelte";
    import Navbar from "../main/Navbar.svelte";
    /**
     * @param {{ target: { firstName: { value: string; }; lastName: { value: string; }; }; }} event
     */

    
    function updateNames(event){
      $firstName = event.target.firstName.value;
      $lastName = event.target.lastName.value;
      console.log($firstName, $lastName);
    }

    function nextPage(){
      goto('/create');
    }
    
    function handleSubmit(event){
      event.preventDefault;
      updateNames(event);
      nextPage();
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
    
      <div class="px-[16px]">
          <input id="firstName" placeholder="First Name" bind:value={$firstName} type="text" class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#888888] placeholder-[#888888bb] py-4 pl-2 outline-none">

          <input id="lastName" placeholder="Last Name" bind:value={$lastName} type="text" class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#888888] placeholder-[#888888bb] py-4 pl-2 outline-none">
      </div>
      
      <div class="px-[16px] w-full flex flex-col gap-[10px]">
        <Button on:click={() =>{
          console.log("clicked");
          nextPage();
        }} type={"button"}>Proceed</Button>
      </div>
    
      <div class="px-[16px] w-full flex flex-row justify-start">
        <AccountQuestion/>
      </div>
  </div>
</div>
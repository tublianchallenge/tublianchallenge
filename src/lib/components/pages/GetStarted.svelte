<script>
    
    import { firstName, lastName, page } from "$lib/stores/model";
    import Button from "../buttons/Button.svelte";
    import Text from "../inputs/Text.svelte";
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
    
    <form class="flex flex-col gap-[20px]" on:submit|preventDefault={() => {
      $page = 2;
      updateNames}}>
      <div class="px-[16px]">
        <Text id="firstName" placeholder={"First Name"} name={"firstName"}></Text>
        <Text id="lastName" placeholder={"Last Name"} name={"lastName"}></Text>
        </div>
        <div class="px-[16px] w-full flex flex-col gap-[10px]">
          <Button on:click={function(){
            $page = 2;
            updateNames}
          } type={"submit"}>Proceed</Button>
        </div>

    </form>
    
    <div class="px-[16px] w-full flex flex-row justify-start">
      <AccountQuestion/>
    </div>
  </div>

</div>
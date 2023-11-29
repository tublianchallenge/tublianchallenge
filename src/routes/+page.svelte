
<script>
import Text from "$lib/components/inputs/Text.svelte";

    import Button from "$lib/components/buttons/Button.svelte";
    import Navbar from "$lib/components/main/Navbar.svelte";
  </script>

<div id="page-wrapper" class="px-[16px] py-[25px] flex flex-col justify-start h-full w-full gap-[20px]">
  <Navbar/>

  <p class="text-white/90 font-space-grotesk text-[20px] font-[700] mt-[40px]">Get Started</p>
  <p class="my-2 text-white/80 font-space-grotesk">Start recruiting streetcred developers, Today!!</p>

  <Text placeholder={"First Name"}></Text>
  <Text placeholder={"Last Name"}></Text>
  <Button>Proceed</Button>
</div>
  
  <style lang="postcss">
    :global(html) {
      background-color: #121212;
    }
  </style>

  
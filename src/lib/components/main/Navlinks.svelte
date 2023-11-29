
<script lang="ts">
   import { viewModel } from "$lib/stores/model";

   viewModel.subscribe((model) => {
    model.page 
   })
</script>

<ul class="text-[#696969] flex flex-row gap-[12px] font-[400] w-full md:w-358px flex-wrap" >
    <li class="selected">1: Get Started</li>
    <li class="selected">2: Create Account</li>
    <li>3: Account Setup</li>
    <li>4: Payment</li>
</ul>

<style>
    .selected{
        background: linear-gradient( to right bottom,#FDD648 , #DB50B1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
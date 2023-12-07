
<script lang="ts">
      export let page = 1;
   
</script>

<ul class="text-[#696969] flex flex-row gap-[12px] font-[400] w-full md:w-358px flex-wrap">
    <li class="selected">1: Get Started</li>
    <li class={page >= 2 ? "selected" : ""}>2: Create Account</li>
    <li class={page >= 3 ? "selected" : ""}>3: Account Setup</li>
    <li class={page >= 4 ? "selected" : ""} >4: Payment</li>
</ul>

<style>
    .selected{
        background: linear-gradient( to right bottom,#FDD648 , #DB50B1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
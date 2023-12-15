
<script lang="ts">
    import { gotoPage } from "$lib/middleware/savePage";

    import { page } from "$lib/stores/model";
</script>

<ul class="text-[#696969] flex flex-row gap-[12px] font-[400] w-full md:w-358px flex-wrap">
    <li class="selected">
        <button on:click={gotoPage(1)}>1: Get Started</button>
    </li>
    <li  class={$page >= 2 ? "selected" : ""}>
        <button on:click={() => gotoPage(2)}>2: Create Account</button>
    </li>
    <li class={$page >= 3 ? "selected" : ""}>
        <button on:click={gotoPage(3)}>3: Account Setup</button></li>
    <li class={$page >= 4 ? "selected" : ""} >
        <button>4: Payment</button>
    </li>
</ul>

<style>
    .selected{
        background: linear-gradient( to right bottom,#FDD648 , #DB50B1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
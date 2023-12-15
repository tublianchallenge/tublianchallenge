

  <script lang="ts">
    import AccountSetup from "$lib/components/pages/AccountSetup.svelte";
    import CreateAccount from "$lib/components/pages/CreateAccount.svelte";
    import GetStarted from "$lib/components/pages/GetStarted.svelte";
    import Loading from "$lib/components/pages/Loading.svelte";
    import { page } from "$lib/stores/model";
    import { error } from "@sveltejs/kit";
    import { browser } from "$app/environment";
    import PaymentPlan from "$lib/components/pages/PaymentPlan.svelte";

    export let form: FormData;    
  </script>

  {#if $page == 1 }
    <Loading/>
    <GetStarted {form}/>
    
  {:else if $page == 2}
    <Loading/>
    <CreateAccount {form}/>
  {:else if $page == 3}
    <Loading/>
    <AccountSetup/>
  {:else if $page == 4}
    <Loading/>
    <PaymentPlan/>
  {/if}

  <style lang="postcss">
    :global(html) {
      background-color: #121212;
    }
  </style>

  
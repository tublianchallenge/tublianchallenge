

  <script>
    import AccountSetup from "$lib/components/pages/AccountSetup.svelte";
    import CreateAccount from "$lib/components/pages/CreateAccount.svelte";
    import GetStarted from "$lib/components/pages/GetStarted.svelte";
    import { page } from "$lib/stores/model";
  </script>

  
  {#if $page == 1}
  <GetStarted/>
  {:else if $page == 2}
  <CreateAccount/>
  {:else if $page == 3}
  <AccountSetup/>
  {/if}

  <style lang="postcss">
    :global(html) {
      background-color: #121212;
    }
  </style>

  
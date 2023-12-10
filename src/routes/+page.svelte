

  <script lang="ts">
    import AccountSetup from "$lib/components/pages/AccountSetup.svelte";
    import CreateAccount from "$lib/components/pages/CreateAccount.svelte";
    import GetStarted from "$lib/components/pages/GetStarted.svelte";
    import { page } from "$lib/stores/model";
    import { createClient } from '@supabase/supabase-js';
    
    import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
    const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

    // $: $page, saveState();
  </script>

  
  {#if $page == 1 }
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

  
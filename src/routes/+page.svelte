

  <script>
    // import GetStarted from "$lib/components/pages/GetStarted.svelte";
    import CreateAccount from "$lib/components/pages/CreateAccount.svelte";
    import viewModel from "$lib/stores/model";

    viewModel.init();
  </script>

  <div>
    <!-- <GetStarted/> -->
    <CreateAccount/>

  </div>
  <style lang="postcss">
    :global(html) {
      background-color: #121212;
    }
  </style>

  
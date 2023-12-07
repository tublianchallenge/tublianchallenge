<!-- src/components/CreateAccountButton.svelte -->
<script>
    export let label;
    export let href;
  </script>
  
  <div class="text-neutral-900 text-base font-medium leading-6 whitespace-nowrap justify-center items-center bg-amber-300 self-stretch -mr-5 mt-7 px-5 py-2 rounded-[30px] max-md:max-w-full">
    <a href="{href}" class="block" role="button">{label}</a>
  </div>  
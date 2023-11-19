<!-- src/components/LoginLink.svelte -->
<script>
    export let text;
    export let href;
  </script>
  
  <div class="text-white text-base leading-6 self-stretch -mr-5 mt-3 max-md:max-w-full">
    <span class="text-zinc-400">{text}</span>
    <a href="{href}" class="font-bold text-white">Log in</a>
  </div>  

<script lang="ts">

import { onDestroy } from "svelte";

let show = true;

const startLoading = new Promise((resolve, reject) => {
  setTimeout(() => {
    show = true
    resolve(show);
  }, 700);
});

async function load(){
    await startLoading.then(
        () =>{
            show = false
        }
    )
}
load();
</script>

{#if show}
<div class="absolute top-0 left-0 z-30 w-screen h-screen text-white bg-[#121212]
">
  <div class="flex flex-col gap-4 justify-center items-center w-full h-full bg-transparent animate-[ping_2s_ease-in-out_infinite]">
    <img src="/img/pages/tublian-logo.png" alt="" class="w-10 h-auto">
    <img src="/img/pages/Tublian.png" alt="" class="h-4">
  </div>
</div>
{/if}

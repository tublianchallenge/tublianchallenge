<!-- src/components/FooterLinks.svelte -->
<script>
    export let privacyPolicyHref;
    export let termsHref;
  </script>
  
  <div class="items-stretch flex w-[276px] max-w-full gap-5 mt-32 self-start max-md:mt-10">
    <a href="{privacyPolicyHref}" class="text-zinc-400 text-base leading-6">Privacy Policy</a>
    <a href="{termsHref}" class="text-zinc-400 text-base leading-6 whitespace-nowrap">Terms</a>
  </div>
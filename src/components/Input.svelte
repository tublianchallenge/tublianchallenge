<script>
    export let label;
    export let type;
  </script>
  
  <div class="text-stone-500 text-base font-medium leading-6 whitespace-nowrap items-stretch self-stretch border-b-[color:var(--base-500-dark-secondary,#888)] -mr-5 mt-6 pt-4 pb-6 border-b border-solid max-md:max-w-full">
    <label for="{type}">{label}</label>
    <input type="{type}" id="{type}" aria-label="{label}" />
  </div>
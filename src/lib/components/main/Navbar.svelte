
<script>
    import Logo from "./Logo.svelte";
    import Navlinks from "./Navlinks.svelte";
    export let page = 1;
</script>
<div id="navbar" class="flex flex-col items-start w-ful h-fit md:flex-row">
    <div class="flex flex-col justify-start items-start w-full font-space-grotesk md:flex-row h-fit gap-[25px]">
        <Logo/>
        <Navlinks {page}/>
    </div>
  </div>
  
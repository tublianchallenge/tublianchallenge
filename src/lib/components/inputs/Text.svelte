<script lang="ts">
    export let name = "Name";
    export let placeholder = "Placeholder";
    export let id = "";
    export let type = "text";
</script>


<input {id}
type={type} {placeholder}  class="font-space-grotesk text-[#888888] w-full md:w-[405px] h-auto bg-[transparent] border-b-[1px] text-[18px] md:text-[20px] border-[#888888] placeholder-[#888888bb] py-4 pl-2 outline-none">

<style>
    input{
        caret-shape: block !important;
    }
</style>
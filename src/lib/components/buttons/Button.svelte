<!-- default button FDD648 -->
<!-- special button FDD648 DB50B1 tr br-->

<!-- google button  transparen - FDD648 DB50B1 tr br outline -->
<script lang="ts">
// @ts-nocheck

export let category: String = "default";
export let type: String = "button";

let colors: Object = {
    default: "#FDD648",
    special: "linear-gradient( to right bottom,#FDD648 , #DB50B1)",
    google:  "transparent"
}
</script>

<button on:click {type} style="background: {colors[category]};" class="rounded-[30px] h-[40px] w-full md:w-[360px] lg:w-[405px] font-[500] font-space-grotesk text-[16px]">
    <slot/>
</button>
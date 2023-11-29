<!-- default button FDD648 -->
<!-- special button FDD648 DB50B1 tr br-->

<!-- google button  transparen - FDD648 DB50B1 tr br outline -->
<script lang="ts">
// @ts-nocheck

export let category: string = "default";
export let type: string = "button";

let colors: Object = {
    default: "#FDD648",
    special: "linear-gradient( to right bottom,#FDD648 , #DB50B1)",
    transparent:  "linear-gradient( #00000000, #00000000)"
}

let background: string = colors.default;
let border: string = colors.tranparent;
let text: string = "#000";

if(category === "special"){
    background = colors.special;
    border = "none";
    text = "#fff";

}else if(category === "google"){
    background = "#121212";
    border = colors.special;
    text = "#ffffffdd";
}

</script>
<div class="w-full p-[1px] rounded-[30px]" style="background-image: {border}">
    <button on:click {type} style="background: {background}; color: {text}" class="rounded-[30px] h-[40px] w-full  font-[400] font-space-grotesk text-[16px] cursor-pointer">
        <div class="flex flex-row justify-center items-center gap-[10px]">
            {#if category === "google"}
                <img src="/img/google/google-logo.png" alt=""> 
            {/if}
            <slot/>
        </div>
    </button>
</div>
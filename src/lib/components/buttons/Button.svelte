<!-- default button FDD648 -->
<!-- special button FDD648 DB50B1 tr br-->

<!-- google button  transparen - FDD648 DB50B1 tr br outline -->
<script lang="ts">

let colors: Object = {
    default: "#FDD648",
    special: "linear-gradient( #FDD648 , #DB50B1);",
    google: "transparent"
}
</script>

<button style="background: ;" class="rounded-[30px] h-[40px] w-[359px] md:w-[360px] lg:w-[405px]">
    <slot/>
</button>
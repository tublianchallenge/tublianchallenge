<script lang="ts">
    import Button from "$lib/components/buttons/Button.svelte";
    import Text from "$lib/components/inputs/Text.svelte";
    import Logo from "$lib/components/main/Logo.svelte";
    import Category from "$lib/components/playground/Category.svelte";
</script>

<div id="playground" class="flex overflow-y-scroll flex-col gap-[50px]  w-screen h-screen bg-[#121212] items-center py-[100px]">

<!-- components go here -->
    <Category category={"Checkbox's"}>
        <div class="flex flex-col gap-10">
        <Button>Proceed</Button>
        <Button>Subscribe</Button>
        <Button category={"special"}>
            <p class="text-white">Contact Us</p>
        </Button>
        <Text></Text>
        <Text placeholder={"Last Name"}></Text> 
        <Logo/>
        </div>
        
    </Category>
</div>

<style>
    #playground{ 
        background-size: 50px 50px;
        background-image: radial-gradient(circle, #ffffff16 2px, rgba(0, 0, 0, 0) 1px);
    }
</style>
<script lang="ts">

    import Category from "$lib/components/playground/Category.svelte";
        let group: number = 1
</script>

<div id="playground" class="flex overflow-y-scroll flex-col gap-[50px]  w-screen h-screen bg-[#121212] items-center py-[100px]">

<!-- components go here -->
    <Category category={"Checkbox's"}> 
    
    </Category>

</div>

<style>
    #playground{ 
        background-size: 50px 50px;
        background-image: radial-gradient(circle, #ffffff16 2px, rgba(0, 0, 0, 0) 1px);
    }
</style>
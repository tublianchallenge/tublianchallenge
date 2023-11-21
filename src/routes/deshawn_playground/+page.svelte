<script lang="ts">

    import Category from "$lib/components/playground/Category.svelte";
    import RadioCard from "$lib/components/RadioCard.svelte";
    let group: number = 1
</script>

<div id="playground" class="flex overflow-y-scroll flex-col gap-[50px]  w-screen h-screen bg-[#121212] items-center py-[100px]">

<!-- components go here -->
    <Category category={"Checkbox's"}> 
        <RadioCard
        bind:group
        value={1}
        checked={true}
        title="Team Projects"
        img={"/img/checkbox/tublian-vector_team.png"}
        description="Hire developers for team projects."/>
        
    </Category>

</div>

<style>
    #playground{ 
        background-size: 50px 50px;
        background-image: radial-gradient(circle, #ffffff16 2px, rgba(0, 0, 0, 0) 1px);
    }
</style>
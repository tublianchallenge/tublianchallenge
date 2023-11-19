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
    
        <RadioCard
        bind:group
        value={2}
        checked={false}
        title="Personal Projects"
        img={"/img/checkbox/tublian-vector_personal.png"}
        description="Hire developers for professional projects."/>
    
        <RadioCard
        bind:group
        value={3}
        checked={false}
        title="Recruiting"
        img={"/img/checkbox/tublian-vector_recruiting.png"}
        description="Recruit developers for outstanding companies."/>
    </Category>

    <Category category={"Checkbox's"}> 
        <RadioCard
        bind:group
        value={1}
        checked={true}
        title="Team Projects"
        img={"/img/checkbox/tublian-vector_team.png"}
        description="Hire developers for team projects."/>
    
        <RadioCard
        bind:group
        value={2}
        checked={false}
        title="Personal Projects"
        img={"/img/checkbox/tublian-vector_personal.png"}
        description="Hire developers for professional projects."/>
    
        <RadioCard
        bind:group
        value={3}
        checked={false}
        title="Recruiting"
        img={"/img/checkbox/tublian-vector_recruiting.png"}
        description="Recruit developers for outstanding companies."/>
    </Category>
</div>

<style>
    #playground{ 
        background-size: 50px 50px;
        background-image: radial-gradient(circle, #ffffff16 2px, rgba(0, 0, 0, 0) 1px);
    }
</style>
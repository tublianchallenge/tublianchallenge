<script>

    import RadioCard from "$lib/components/RadioCard.svelte"
    import Category from "$lib/components/playground/Category.svelte"
    import {profile_group} from "$lib/stores/model"
</script>

<div id="playground" class="flex overflow-scroll flex-row gap-[50px] justify-start items-center w-[300vw] h-screen bg-[#121212] px-[300px]">
<!-- components go here -->
    <Category category={"Checkbox's"}>
        <RadioCard
        group={$profile_group}
        value={1}
        title="Team Projects"
        img={"/img/checkbox/tublian-vector_team.png"}
        description="Hire developers for team projects."/>
    
        <RadioCard
        group={$profile_group}
        value={2}
        title="Personal Projects"
        img={"/img/checkbox/tublian-vector_personal.png"}
        description="Hire developers for professional projects."/>
    
        <RadioCard
        group={$profile_group}
        value={3}
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
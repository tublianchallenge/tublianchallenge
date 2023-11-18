<script>
    import RadioCard from "$lib/components/RadioCard.svelte";
    let group = 1;
</script>

<div id="playground" class="flex overflow-scroll flex-row gap-[50px] justify-start items-center w-[300vw] h-screen bg-[#121212] px-[300px]">
<!-- components go here -->
    <RadioCard
    group={1}
    value={1}
    title="Team Projects"
    img={"/img/checkbox/tublian-vector_team.png"}
    description="Hire developers for team projects."/>

    <RadioCard
    group={1}
    value={2}
    title="Personal Projects"
    img={"/img/checkbox/tublian-vector_personal.png"}
    description="Hire developers for professional projects."/>

    <RadioCard
    group={1}
    value={3}
    title="Recruiting"
    img={"/img/checkbox/tublian-vector_recruiting.png"}
    description="Recruit developers for outstanding companies."/>
</div>

<style>
    #playground{ 
        background-size: 50px 50px;
        background-image: radial-gradient(circle, #ffffff16 2px, rgba(0, 0, 0, 0) 1px);
    }
</style>
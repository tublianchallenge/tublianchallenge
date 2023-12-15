<script>
    import { gotoPage } from "$lib/middleware/savePage";
    import Button from "../buttons/Button.svelte";
    import RadioCard from "../inputs/RadioCard.svelte";
    import Navbar from "../main/Navbar.svelte";
    
</script>

<div class="px-[16px] py-[25px] flex flex-col justify-start h-full w-full gap-[20px] items-center ">
    <div class="bg-lime-200 min-w-5 min-h-5"></div>
    <Navbar page={3}/>
    <div class="flex flex-col gap-[10px]">
        <h1 class="font-[500] font-space-gotesk text-[23px] text-[#FEFEFE] text-center md:text-[30px] md:mt-4">How Are you planning to use Tublian?</h1>
        <p class="text-[#CFCFCF] font-space-grotesk text-center">We will customize your experience based on your option.</p>
    </div> 
    <div class="flex flex-col md:flex-row gap-[20px] w-full my-2 md:my-6 md:justify-center">
        
        <RadioCard title={"Team Projects"} description={"Hire developers for team projects."} image={"/img/checkbox/tublian-vector_team.png"}/>
        <RadioCard title={"Personal Projects"} description={"Hire developers for personal projects."} image={"/img/checkbox/tublian-vector_personal.png"}/>
        <RadioCard title={"Recruiting"} description={"Recruit developers for outstanding companies."} image={"/img/checkbox/tublian-vector_recruiting.png"}/>
    </div>

    <div class="flex flex-row justify-center w-full" >
        <Button on:click={() => gotoPage(2)}> Next</Button>
    </div>
    <div class="">
        <ul class="flex flex-row gap-4 font-[400] font-space-grotesk text-[#B7B7B7bb]">
            <li><a href="">Privay Policy</a></li>
            <li><a href="">Terms</a></li>
        </ul>
    </div>
</div>
<script lang="ts">
    export let id: string="1";
    export let image: string= "";
    export let title: string = "Title";
    export let description: string = "Lorem ipsum dolor sit amet"
</script>

<div>
    <div class="relative w-full radio-card font-space-grotesk h-[100px] md:h-[288px] md:w-[250px]">
            <input type="radio" name="use" {id} class="w-full h-full md:w-[250px] md:h-[288px]">
            <label for={id}></label>
            <div class="absolute top-0 left-0 z-20 w-full h-full md:w-[250px] md:h-[288px] rounded-[20px pointer-events-none">
                <div class="w-full h-full rounded-l-[20px] flex flex-row p-4 gap-[20px]items-center justify-center md:flex-col md:items-center">
                    <img src={image} alt="" class="w-[71px] h-[72px] md:h-[116px] md:w-[155px] md:mt-12">
                
                    <div class="h-full">
                        <h2 class="text-2xl font-[700] font-space-grotesk text-[#FEFEFE] md:text-center">{title}</h2>
                        <p class="text-[14px] text-[#CFCFCF] font-space-grotesk md:text-center">{description}</p>
                    </div>
                </div>
            </div>
    </div>
</div>

<style>
   
    
    input[type="radio"]{
        -webkit-appearance: none;
        appearance: none;
        background-color:#1E1E1E;
        border-radius: 20px;
        top: 0;
        left: 0;
        position: absolute;
        cursor: pointer;
        outline: none;
    }

    input[type="radio"]:before{
        content: "";
        position: absolute;
        height: 24px;
        width: 24px;
        background: transparent;
        border: 1px solid #292929;
        border-radius: 50%;
        top: 38px;
        right: 20px;
    }

    input[type="radio"]:after{
        content: "";
        position: absolute;
        height: 24px;
        width: 24px;
        background: transparent;
        border-radius: 50%;
        top: 38px;
        right: 20px;
    }

    input[type="radio"]:checked{
        background: linear-gradient(#1E1E1E, #1E1E1E) padding-box,
                    linear-gradient( to right bottom,#FDD648 , #DB50B1) border-box;
        border-radius: 20px;
        border: 1px solid transparent;
    }

    input[type="radio"]:checked:after{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 2px;
        content: url("/img/checkbox/check.svg");
        background: linear-gradient( to right bottom,#FDD648 , #DB50B1);
    }
</style>
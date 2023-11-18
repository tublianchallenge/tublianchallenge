<script>
    export let description = ""
    export let img = ""
    export let title = ""
    export let group = undefined
    export let value = undefined
    import Radio from "$lib/components/Radio.svelte"
</script>

<div class=" bg-[#1E1E1E] w-[250px] h-[288px] py-[14px] px-[38px] flex flex-col border-1 rounded-[20px] border-[1px] border-[#292929] relative">
    
    <Radio bind:group/>
    
    <div class="flex flex-row justify-center max-h-[128px] w-full mt-[25px]">
        <img src="{img}"/>
    </div>
    <div class="flex justify-center w-full text-[#FEFEFE] mt-[10px] mb-[6px]">
        <h1 class="font-[700] font-space-grotesk text-[24px] whitespace-nowrap leading-[34px]">{title}</h1>
    </div>
    <div class="flex flex-row justify-center w-full text-[#CFCFCF]">
        <p class="font-space-grotesk text-center text-[16px] font-[500] text-[#CFCFCF]leading-[24px] w-[210px] shrink-0">{description}</p>
    </div>
   

</div>


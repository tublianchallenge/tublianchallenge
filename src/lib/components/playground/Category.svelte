
<script>
    export let category = ""
</script>

    <div class="p-[40px] flex flex-col items-center gap-[20px] border rounded-[20px] border-solid border-slate-600/30 backdrop-blur-sm">

        <h1 class="text-[2.5rem] font-extrabold text-center font-space-grotesk text-white/80">{category}</h1>
        <div class="flex flex-row gap-[40px]">
            <slot/>
        </div>
        
    </div>

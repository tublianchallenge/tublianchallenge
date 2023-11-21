<script lang="ts">
    
    export let img = String(undefined);
    export let title = String(undefined);
    export let description = String(undefined);
    export let group: number = Number(undefined);
    export let value: number = Number(undefined);

    let radioCards = [
        { id: 1, checked: false, radioBackground: "transparent", radioCardBorder: "linear-gradient(#292929, #292929)" },

        // Add more objects for each radio card
    ];

    function selectRadioCard(card) {
        radioCards = radioCards.map((rc) => {
            if (rc.id === card.id) {
                rc.checked = true;
                rc.radioBackground = "linear-gradient(#F5C370, #DD58AC)";
                rc.radioCardBorder = "linear-gradient(#F5C370, #DD58AC)";
            } else {
                rc.checked = false;
                rc.radioBackground = "transparent";
                rc.radioCardBorder = "linear-gradient(#292929, #292929)";
            }
            return rc;
        });
    }
</script>

{#each radioCards as card}
    <label on:click={() => selectRadioCard(card)} class="radio-card-border-wrap p-[1px] rounded-[20px]"
        style="background-image: {card.radioCardBorder};">
        <div class="bg-[#1E1E1E] w-[250px] h-[288px] py-[14px] px-[38px] flex flex-col border-1 rounded-[20px] relative hover:bg-[#292929] hover:cursor-pointer">
            {#if card.checked}
                <div class="radio-box absolute top-[14px] left-[212px] w-[24px] h-[24px] rounded-full border border-1 border-[#292929]" style="background-image: {card.radioBackground};">
                </div>
            {/if}
            <div class="flex flex-row justify-center max-h-[128px] w-full mt-[25px]">
                <img src="{img}" />
            </div>
            <div class="flex justify-center w-full text-[#FEFEFE] mt-[10px] mb-[6px]">
                <h1 class="font-[700] font-space-grotesk text-[24px] whitespace-nowrap leading-[34px]">{title}</h1>
            </div>
            <div class="flex flex-row justify-center w-full text-[#CFCFCF]">
                <p class="font-space-grotesk text-center text-[16px] font-[500] text-[#CFCFCF] leading-[24px] w-[210px] shrink-0">{description}</p>
            </div>
        </div>
    </label>
{/each}

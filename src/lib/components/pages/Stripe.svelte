<script lang="ts">
    import Text from "../inputs/Text.svelte";
    export const cost: number;
</script>

<div class="flex overflow-hidden absolute top-0 left-0 z-30 flex-row justify-center p-20 w-screen bg-transparent backdrop-blur-lg h-fit font-space-grotesk">
    <div id="paymentForm" class="w-full md:w-[580px] h-[1141px] bg-[#1E1E1E] rounded-[20px] p-[20px] flex flex-col gap-[40px] relative">
        
        <div class="flex flex-row justify-between">
            <img src="/img/pages/tublian-full.png" alt="tublina logo" class="h-[24.91px]">
            <button><img src="/img/pages/x-button.png" alt=""></button>
        </div>

        <div id="monthlyPlan" class=" w-[508px] h-[175px] bg-[#292929] rounded-[10px]">
            <div class="p-[20px] w-full h-[60px] flex flex-row justify-between border-b-[1px] border-[#414141]">
                <p class="font-[700] text-xl font-space-grotesk text-[#FEFEFE]/90">Monthly Plan</p>
                <p class="text-[#FDD649] font-space-grotesk">Change Plan</p>
            </div>
            <div class="flex flex-row justify-start w-full">

            </div>
            <div class="p-[20px] justify-between flex flex-row w-full text-[#FEFEFE] font-space-grotesk">
                <p class="w-[50%] text-xl font-[500]">Total:</p>
                <div class="w-[50%] flex flex-row justify-end gap-[10px]">
                     <div class="flex flex-row justify-center font-[500] items-center h-full text-[#B7B7B7]">USD</div>
            <div class="text-3xl font-[700]">$49.99<span class="font-[700] text-lg text-[#B7B7B7]">/Month</span></div>
                </div>
            </div>

           
        </div>
        <div class="flex flex-col px-[20px] gap-[20px]">
            <p class="font-[700] text-xl leading-[32px] text-[#FEFEFE]">Payment Method</p> 
            <p class="text-[#CFCFCF] font-[500]">Choose how you’d like to pay.</p>
         </div>
         <div>
            
         </div>
         <div>
            <p class="font-[700] text-lg leading-[32px] text-[#FEFEFE] flex flex-col">Payment Method</p> 
            <div class="flex flex-col gap-[10px]">
                <Text placeholder={"Email"}></Text>
                <Text placeholder={"Card holder"}></Text>
                <Text placeholder={"Card Number"}></Text>
                <Text placeholder={"MM/YY"}></Text>
                <Text placeholder={"CVV"}></Text>
                <Text placeholder={"Country"}></Text>
            </div>
         </div>
         <div>
            <p class="font-[500] text-[#FEFEFE] text-base">By clicking below, you agree to our <span class="text-[#FDD649]">Terms</span> ,  <span class="text-[#FDD649]">Privacy Policy</span> and  <span class="text-[#91C3FD]">Automatic Renewal</span>. Tublian will charge you $49.99 (plus Tax) each month until you cancel you subscription in account settings.</p>
         </div>

         <Button>{cost}</Button>
</div>
</div>
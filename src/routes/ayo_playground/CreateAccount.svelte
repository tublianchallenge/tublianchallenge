<script>
  export let images = {
    main: "https://cdn.builder.io/api/v1/image/assets/TEMP/690365f7-ce1b-4fbe-93e2-112245ade8fd?apiKey=1e8cd32825fa495abd6eed872c3cbf13&",
    sub1: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0ad30ee-9327-40cb-bbaf-dace4195b338?apiKey=1e8cd32825fa495abd6eed872c3cbf13&"
  };
</script>

<!-- Main Image -->
<img
  loading="lazy"
  src={images.main}
  class="aspect-[0.89] object-contain object-center w-full justify-end items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
/>

<!-- Navigation Bar -->
<div class="flex gap-5 justify-between items-stretch self-stretch -mr-5 max-md:max-w-full max-md:flex-wrap">
  <!-- Sub-Image 1 -->
  <img
    loading="lazy"
    src={images.sub1}
    class="aspect-[4.92] object-contain object-center w-[123px] justify-center items-center overflow-hidden shrink-0 max-w-full"
  />
  
  <!-- Navigation Links -->
  <div class="flex gap-3 items-stretch self-center my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
    <div role="link" tabindex="0" class="text-sm font-medium leading-5 bg-clip-text bg-[linear-gradient(109deg,#FBDA61_0%,rgba(255,90,205,0.84)_86.08%)]">1: Get Started</div>
    <div role="link" tabindex="0" class="text-sm font-medium leading-5 bg-clip-text bg-[linear-gradient(109deg,#FBDA61_0%,rgba(255,90,205,0.84)_86.08%)]">2: Create Account</div>
    <div class="text-sm font-medium leading-5 text-stone-500">3: Account Setup</div>
    <div class="text-sm font-medium leading-5 whitespace-nowrap text-stone-500">4: Payment</div>
  </div>
</div>

<!-- Title -->
<div class="text-white text-4xl font-bold leading-[52px] self-stretch whitespace-nowrap -mr-5 mt-9 max-md:max-w-full">
  <h1>Create Account</h1>
</div>

<!-- Account Information -->
<div class="self-stretch mt-7 -mr-5 text-base font-medium leading-6 text-blue-400 whitespace-nowrap max-md:max-w-full">
  <span class="text-stone-300">Creating account for</span>
  <span class="text-blue-400">@John Doe</span>
</div>

<!-- Email Input -->
<div class="text-stone-500 text-base font-medium leading-6 whitespace-nowrap items-stretch self-stretch border-b-[color:var(--base-500-dark-secondary,#888)] -mr-5 mt-6 pt-4 pb-6 border-b border-solid max-md:max-w-full">
  <label for="email">Email</label>
  <input type="email" id="email" aria-label="Email" />
</div>

<!-- Password Input -->
<div class="text-stone-500 text-base font-medium leading-6 whitespace-nowrap items-stretch self-stretch border-b-[color:var(--base-500-dark-secondary,#888)] -mr-5 mt-1.5 pt-4 pb-6 border-b border-solid max-md:max-w-full">
  <label for="password">Password</label>
  <input type="password" id="password" aria-label="Password" />
</div>

<!-- Password Strength Indicators -->
<!-- ... (omitted for brevity) ... -->

<!-- Create Account Button -->
<div class="text-neutral-900 text-base font-medium leading-6 whitespace-nowrap justify-center items-center bg-amber-300 self-stretch -mr-5 mt-7 px-5 py-2 rounded-[30px] max-md:max-w-full">
  <a href="#" class="block" role="button">Create Account</a>
</div>

<!-- Divider -->
<div class="flex gap-2 items-stretch self-stretch mt-3.5 -mr-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
  <hr class="bg-neutral-700 self-center w-[324px] shrink-0 h-px my-auto" aria-hidden="true" />
  <span class="text-sm font-medium leading-5 text-zinc-400">Or</span>
  <hr class="bg-neutral-700 self-center w-[324px] shrink-0 h-px my-auto" aria-hidden="true" />
</div>

<!-- Sign Up with Google Button -->
<!-- ... (omitted for brevity) ... -->

<!-- Login Link -->
<div class="self-stretch mt-3 -mr-5 text-base leading-6 text-white max-md:max-w-full">
  <span class="text-zinc-400">Already have an account?</span>
  <a href="#" class="font-bold text-white">Log in</a>
</div>

<!-- Footer Links -->
<div class="items-stretch flex w-[276px] max-w-full gap-5 mt-32 self-start max-md:mt-10">
  <a href="#" class="text-base leading-6 text-zinc-400">Privacy Policy</a>
  <a href="#" class="text-base leading-6 whitespace-nowrap text-zinc-400">Terms</a>
</div>
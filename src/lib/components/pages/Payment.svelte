<script>
    // Import Tailwind CSS
    import 'tailwindcss/tailwind.css';
  </script>
  
  <style>
    .container {
      @apply w-580 h-491 relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800;
    }
  
    .logo-container {
      @apply absolute left-20 top-20 flex justify-start items-center space-x-8;
    }
  
    .logo {
      @apply w-14 h-16 relative;
  
      div {
        @apply absolute;
      }
    }
  
    .text-container {
      @apply absolute w-540 left-20 text-center text-gray-300;
    }
  
    .title {
      @apply text-5xl font-bold leading-16;
    }
  
    .description {
      @apply text-lg font-medium leading-6;
    }
  
    .button-container {
      @apply absolute w-540 p-4 left-20 bottom-8 flex justify-center items-center bg-yellow-400 rounded-full;
    }
  
    .button-text {
      @apply text-lg font-medium text-gray-900;
    }
  </style>
  
  <div class="container">
    <div class="logo-container">
      <div class="logo">
      </div>
      <div class="text-xs text-white font-ReceptsNFW01-Regular">Tublian</div>
    </div>
  
    <div class="text-container">
      <div class="title">Payment Successful</div>
      <div class="description">Your payment went through successfully.</div>
    </div>
  
    <div class="button-container">
      <div class="button-text">Proceed</div>
    </div>
  
    <div class="absolute w-580 h-314">
    </div>
  
    <div class="absolute w-177 h-177 left-202 top-68">
      <div class="flex absolute justify-center items-center w-95 h-95 left-41 top-41">
        <div class="relative w-95 h-95">
          <div class="absolute top-8 left-8 bg-green-500 rounded-full w-79 h-79"></div>
          <div class="absolute opacity-0 transform -rotate-180 w-95 h-95 left-95 top-95"></div>
        </div>
      </div>
    </div>
  </div>
  
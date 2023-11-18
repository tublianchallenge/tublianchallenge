

<script>
  export let group = undefined;
  export let value = undefined;
</script>

<label>
  <input type="radio" bind:group {value} class="absolute top-[14px] left-[212px]">
	<slot />
</label>



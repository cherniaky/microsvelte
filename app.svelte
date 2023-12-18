<script>
  let counter = 5;
  
  const increment = () => {counter += 1};
  const decrement = () => counter--;

  $: double = counter * 2;
  $: quadruple = double * 2;

</script>

<button on:click={decrement}>Decrement</button>
<div>{counter} * 2 = {double}</div>
<div>{double} * 2 = {quadruple}</div>
<button on:click={increment}>Increment</button>

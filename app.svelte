<script>
  let counter = 0;
  let value = 2;
  const increment = () => {counter += 1};
  const incrementValue = () => {value += 1};
  const decrement = () => counter--;
</script>

<button on:click={decrement}>Decrement</button>
<div>{counter*value}</div>
<div>Value: {value}</div>
<button on:click={increment}>Increment</button>
<button on:click={incrementValue}>Increment Value</button>

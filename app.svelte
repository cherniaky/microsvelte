<script>
  let counter = 0;
  let value = 2;
  const increment = () => {counter += 1};
  const incrementValue = () => {value += 1};
  const decrement = () => counter--;
  const display = () => counter;
  function two(){ return value};
</script>

<button on:click={decrement}>Decrement</button>
<div>{display()* two()}</div>
<button on:click={increment}>Increment</button>
<button on:click={incrementValue}>Increment Value</button>

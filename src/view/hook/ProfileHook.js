import React, { memo,useCallback, useState } from 'react'
const CounterIncrement = memo((props) => {
  console.log("CounterIncrment被渲染:", props.name);
  return <button onClick={props.increment}>+1</button>
})
export default function ProfileHook() {
  const [count, setCount] = useState(0);
  const increment1 = useCallback(function increment() {
    setCount(count + 1)
  }, []);
  const increment2 = function increment() {
    setCount(count + 1)
  };
  return (
    <div>
      <h2>当前计数: {count}</h2>
      <CounterIncrement increment={increment1} name="increment1"></CounterIncrement>
      <CounterIncrement increment={increment2} name="increment2"></CounterIncrement>
    </div>
  )
}

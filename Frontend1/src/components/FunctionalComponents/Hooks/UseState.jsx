import { useState } from "react";

function UseState() {
  var initialVal = 0;
  var [num, setNum] = useState(initialVal);

  function handleDecrement() {
    setNum(num - 1);
  }

  return (
    <div>
      <h1>UseState Page</h1>
      <h2>State Initial Value is: {initialVal} </h2>
      <button onClick={handleDecrement}>-</button>
      {/* <button onClick={()=>setNum(num-1)}>-</button> */}
      <h3>Updating State: {num} </h3>
      <button onClick={() => setNum(num+1)}>+</button>
      <br /><br />
      <button onClick={()=>setNum(0)}>Reset to 0</button>
    </div>
  );
}
export default UseState;

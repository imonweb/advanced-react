import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    console.log('clicked the button');
   setTimeout(() => setValue((currentState) => {
    return currentState + 1;
   }), 3000);
     
  }
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={handleClick} type="button" className="btn">increase</button>
    </div>
  );
};

export default UseStateGotcha;

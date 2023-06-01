import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
   setTimeout(() => setValue(value + 1), 3000);
     
  }
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={handleClick} type="button" className="btn">Click me</button>
    </div>
  );
};

export default UseStateGotcha;

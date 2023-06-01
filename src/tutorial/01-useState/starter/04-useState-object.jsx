import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 20,
    hobby: 'coding',
  });

  const displayPerson = () => {
    // setPerson({name: 'john', age: 20, hobby: 'hacking'})
    setPerson({ ...person, name: 'Jake' })
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button onClick={displayPerson} className='btn'>Show Name</button>

    </>
  )
};

export default UseStateObject;

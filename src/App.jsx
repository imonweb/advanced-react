 
import { useState } from 'react'
import './App.css'
import { data } from './data'

import Starter from './tutorial/01-useState/starter/05-useState-gotcha'
// import Starter from './tutorial/01-useState/starter/04-useState-object'
// import UseStateBasics from './tutorial/01-useState/starter/02-useState-basics'

// import Final from './tutorial/01-useState/final/04-useState-object'
// import UseStateArray from './tutorial/01-useState/starter/03-useState-array'

// import Starter from './tutorial/01-useState/starter/03-useState-array';
// import Final from './tutorial/01-useState/final/03-useState-array';


function App() {
  return (
      <div className='container'>
        {/* <h1>useState Basics</h1> */}
        {/* <UseStateBasics /> */}
        {/* <UseStateArray /> */}
        <Starter />
        {/* <Final /> */}

      </div>
  )
}

export default App

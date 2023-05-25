import { useState } from 'react'
// import UseStateBasics from './tutorial/01-useState/starter/02-useState-basics'
import './App.css'
import UseStateArray from './tutorial/01-useState/starter/03-useState-array'
import { data } from './data'

import Starter from './tutorial/01-useState/starter/03-useState-array';
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

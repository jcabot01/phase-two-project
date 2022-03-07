import React from 'react'
import { useState } from 'react'

function ClickMe() {
  const [isHello, setIsHello] = useState("");


  function handleHello(e) {
    console.log(e.target.value)
    setIsHello(e.target.value)
  }

  function counter(){

  }

  function handleSubmit(e){
    e.preventDefault()
    //logic 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Hello or Goodbye" value={isHello} onChange={handleHello}></input>
        <button>Click Me</button>
        <p>Counter</p>
      </form>  
    </div>
  )
}

export default ClickMe

//<div>
//form
//text input, button click me, <p>0<p>

//if hello = 5 incrementing //increments based on characters
//if goodbye = 12
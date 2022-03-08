import React from 'react'
import { useState } from 'react'

function ClickMe() {
  const [text, setText] = useState(""); 
  const [count, setCount] = useState(0);


  function handleSubmit(e){ 
    e.preventDefault()   
    const changingText = text.length
    setCount(changingText + count)
    setText("") //clear form
  }

  function reset(e){
    setCount(0)
  }
  
//render the count to the page {count}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"  
          placeholder="type a word" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
        >
        </input>
        <button>Click Me</button>
        <button onClick={reset}>Reset Count</button>
        <p>Counter {count}</p>
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
import React, {useState} from 'react'

function Todoinput(props) {
    const [inputText,setinputText]=useState('');
    const handleenter=(e)=>{
        if(e.key==='Enter'){
            props.addList(inputText);
            setinputText('');
        }
    }
  return (
    <div className='input-container'>
        <input  
        type='text' 
        className='input-box-todo'
        placeholder='Enter your todo'
        value={inputText}
        onKeyDown={handleenter}
        onChange={e=>{
            setinputText(e.target.value)
        }}/>
        <button  id="myButton"
        className='add-btn'
        onClick={()=>{
            props.addList(inputText)
            setinputText("")
        }}>+</button>
        {/* <div>{inputText}</div> */}
    </div>
  )
}

export default Todoinput

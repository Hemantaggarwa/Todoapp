import React, { useState } from 'react'
import './App.css'
import Todoinput from './Components/Todoinput'
import Todolist from './Components/Todolist';
function App() {
  const [listtodo,setlisttodo]=useState([]);
  let addList=(inputtext)=>{
    if(inputtext!=''){
      setlisttodo([...listtodo,inputtext]);
    }
  }
  const deletelistitem=(key)=>{
      let newlisttodo=[...listtodo]
      newlisttodo.splice(key,1);
      setlisttodo([...newlisttodo])
  }
    return (
    <div className='main-container'>
      <div className='center-container'>
        <Todoinput addList={addList}/>
        <h1 className='app-heading'>TODO</h1>
        <hr></hr>
        {listtodo.map((listitem,i)=>{
          return(
            <Todolist key={i} item={listitem} index={i} deletelistitem={deletelistitem}></Todolist>
          )
        })}
      </div>
    </div>
  )
}
export default App

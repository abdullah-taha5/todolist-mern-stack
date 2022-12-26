import React, { useRef } from 'react'
import axios from "axios";
function Form({getData}) {
  const inputRef = useRef();
    const todo = {
        todo: null
    };
    const handleChange = (e) => {
        todo[e.target.name] = e.target.value;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://opentodolist.herokuapp.com/", todo);
        getData();
      inputRef.current.value = null;
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
    <input type="text" placeholder='Add a todo' className='todo-input' name='todo' onChange={handleChange} ref={inputRef}/>
    <button type="submit" className='todo-button'>Add todo</button>
    </form>
  )
}

export default Form
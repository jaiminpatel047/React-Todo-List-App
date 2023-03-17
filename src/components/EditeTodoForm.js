import React, { useState } from 'react'

export const EditeTodoForm = ({editeTodo, task}) => {
   const [value, setValue] = useState(task.task)
   
   const handleSubmit = e => {
       e.preventDefault();

       editeTodo(value, task.id);
       setValue('')
   }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
         <input type="text" className='todo-input' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
         <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

import React, { useState } from 'react'
import { Todoform } from './Todoform'
import { Todo } from './Todo'
import { EditeTodoForm } from './EditeTodoForm';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
  
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo =>{
    setTodos([...todos, {id: uuidv4(), task: todo, complete: false, isEditing: false}])
    console.log(todos);
  }


  const toggleComplete = id => {  setTodos(todos.map(todo => todo.id === id ? {...todo, complete: !todo.complete}: todo))  }
  const deleteTodo = id => {  setTodos(todos.filter(todo => todo.id !== id))  }
  const editeTodo = id => {  setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))  }
  const editeTask = (task, id) => { setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo)) }
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
       <Todoform  addTodo={addTodo}/>
        {todos.map((todo, index)=>(
          todo.isEditing ? (
            <EditeTodoForm editeTodo={editeTask} task={ todo } />
          ) : ( <Todo task={ todo } key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editeTodo={editeTodo} /> )
       ))}
    </div>
  )
}

import React from 'react'
import Todoo from './Todoo'

const TodoList = ({todoList, setTodoList}) => {
  return (
    <div>
        {todoList.map((todoitem)=>(
            <Todoo setTodoList={setTodoList} todoList={todoList} key={todoitem.id} todoitem={todoitem}></Todoo>
        ))}
    </div>
  )
}

export default TodoList;
import React from 'react'
import styles from './Todo.module.css'
import shortid from'shortid'

const Form = ({todo, setTodo, todoList, setTodoList}) => {

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList,{name:todo, id: shortid.generate() }]);
        setTodo('')
        console.log(todoList);
    }


  return (

    <div className={styles.todoform}>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" className={styles.todoinput} placeholder='Add Task' value={todo} onChange={handleChange} required/>
            <button type="submit" className={styles.todobutton}>Add</button>
        </form>
    </div>
  )
}

export default Form;
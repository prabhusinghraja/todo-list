import React from 'react'
import styles from '../To-do/Todo.module.css'

const Todoo = ({todoitem, todoList, setTodoList}) => {
    const deletebtn = ()=>{
        setTodoList(todoList.filter((item) => item.id !== todoitem.id))
    }
  return (
    <div className={styles.center}>
        <div className={styles.todoitem}>
            <h3 className={styles.todoo}>{todoitem.name}</h3>
            <button onClick={deletebtn} className={styles.donebutton}>Done</button>
        </div>
    </div>
  )
}

export default Todoo
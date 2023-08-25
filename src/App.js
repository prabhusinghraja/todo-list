import { useState } from 'react';
import Form from './To-do/Form';
import Header from './To-do/Header';
import TodoList from './To-do/TodoList';


function App() {

    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])
    
  return (
    <div className="App">
      <Header />
        <Form 
          todo={todo} 
          setTodo={setTodo} 
          todoList={todoList} 
          setTodoList={setTodoList}
        >
        </Form>
        <TodoList setTodoList={setTodoList} todoList={todoList}/>
    </div>
  );
}

export default App;

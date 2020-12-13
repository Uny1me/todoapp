import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { FaPen } from 'react-icons/fa'
import { FiTrash2 } from 'react-icons/fi'

// import TodoList from './TodoList'

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = value =>  {
        updateTodo(edit.id, value)
        setEdit ({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }



    return todos.map((todo, index) => (
     <div className={todo.isComplete ? 'todo-complete' : 'not-complete'} key = {index} style={{
         display: "flex",
         alignItems: "center",
         cursor:"pointer"

     }}>  
     
        <div key ={todo.id} onClick = {() => completeTodo(todo.id)}
        style = {{padding: "1rem"}}
        >
            {todo.text}
            
        </div>
         <button className="editButton" style={{margin: "0 1rem"}} onClick={() => setEdit({id: todo.id, value: todo.text})}><FaPen style={{ fontSize: "1.4rem", color: "grey"}}/></button>

            <button className="removeButton" style={{margin: "0 1rem"}} onClick={() => removeTodo(todo.id)}><FiTrash2 style ={{fontSize: "1.4rem",color: "grey"}}/></button>
        
     </div>
    ))
}

export default Todo

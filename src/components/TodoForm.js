import React, { useState, useEffect, useRef } from 'react'
import { GrFormAdd } from 'react-icons/gr'
import { FaPen } from 'react-icons/fa'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleTaskInputChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} style={{display: "flex"}}>
            {props.edit ? ( 
            <>
            <input 
          name="task"
          type="text"
          className="todo__input"
          value={input}
          onChange={handleTaskInputChange}
          placeholder="Edit Your Todo"
          ref={inputRef}
        />
           
        <button type="submit" className="addButton"><FaPen style={{ fontSize: "1.4rem", color: "grey"}}/></button>
                </>

          ) : (<>
          <input 
            name="task"
            type="text"
            className="todo__input"
            value={input}
            onChange={handleTaskInputChange}
            placeholder="Add a Todo"
            ref={inputRef}
          />
             
          <button type="submit" className="addButton"><GrFormAdd/></button>
          </> )
            }

        
      </form>
    )
}

export default TodoForm

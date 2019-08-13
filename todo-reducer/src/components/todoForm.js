import React, { useState, useReducer } from 'react';

//Import Reducers
import { initialState, reducer } from '../reducers/Reducer';
// import ToDoList from './todoList';


const TodoForm = () => {
    
    const [toDo, setToDo] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState)

    
    const handleChanges = change => {
        setToDo(change.target.value)
    }

    return (
        <form>
            <h1>To-do List:</h1>
                <li>
                    {state.task}
                </li>
            {/* <ToDoList state={state} /> */}
            <input 
                type='text'
                value={toDo}
                onChange={handleChanges}
            />
            <button onClick={(e) => {
                // console.log(e)
                e.preventDefault()
                // setToDo(toDo)
                dispatch({ type: 'ADD_TODO', payload: toDo})
            }
            }>Add Todo</button>
        </form>
    )
}

export default TodoForm;
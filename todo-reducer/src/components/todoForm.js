import React, { useState, useReducer } from 'react';

//react-redux hook to hold state
import { useSelector, useDispatch } from 'react-redux';

//import action creator
import { AddTodoAction } from '../actions/TodoActionCreator';


const TodoForm = () => {
    
    const state = useSelector(state => state)
    // console.log(state)

    const dispatch = useDispatch();

    const handleChanges = change => {
        let input = change.target.value

    }

    const createListItems = () => //Itirates original array and creates a list of objects
        state.map(object => {
            return <li key={object.id}>{object.task}</li>
        })
    

    return (
        <form>
            <h1>To-do List:</h1>
                {createListItems()} {/*<--- RENDERS LIST OF STATE*/}
            <input 
                type='text'
                // value={input}
                onChange={handleChanges}
            />
            <button onClick={(e) => {
                // console.log(e)
                e.preventDefault()
                // setToDo(toDo)
                dispatch({ type: 'ADD_TODO', payload: AddTodoAction})
            }
            }>Add Todo</button>
            <p>testing changes in zest</p>
        </form>
    )
}

export default TodoForm;
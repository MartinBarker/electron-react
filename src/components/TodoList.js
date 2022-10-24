import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
    var [todos, setTodos] = useState([])

    useEffect(() => {
        displayTodos();
    }, []);

    const displayTodos = () => {
        console.log('displayTodos()')
        //get localstorage todos value, set as [] if it doesnt exist yet
        var localStorageTodos = JSON.parse(localStorage.getItem('todos'))
        if (localStorageTodos == null) localStorageTodos = []

        //if todos is blank, but some exist in localstorage, retrieve localstorage todos
        if (todos.length == 0 && localStorageTodos.length >= 1) {
            setTodos(localStorageTodos)
        }
    }

    const addTodo = todo => {
        //dont continue if todo text is blank
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        /*
        //get localstorage todos value, set as [] if it doesnt exist yet
        var localStorageTodos = JSON.parse(localStorage.getItem('todos'))
        if (localStorageTodos == null) localStorageTodos = []

        //if todos is blank, but some exist in localstorage, retrieve localstorage todos
        if (todos.length == 0 && localStorageTodos.length >= 1) {
            todos = localStorageTodos
        }
        */

        //combine current todo with list of todos
        const newTodos = [todo, ...todos]

        //add to state and localstorage
        setTodos(newTodos)
        localStorage.setItem('todos', JSON.stringify(newTodos))

        console.log('newTodos=', newTodos)

    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
        localStorage.setItem('todos', JSON.stringify(removeArr))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
        localStorage.setItem('todos', JSON.stringify(updatedTodos))
    }

    return (
        <div>
            <h1>whats the plan for today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList
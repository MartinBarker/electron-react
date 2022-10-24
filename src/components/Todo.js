import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { FaGripLines } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'
import {AiOutlineCloseCircle} from 'react-icons/ai'

function Todo(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    var todos = props.todos
    var completeTodo = props.completeTodo
    var removeTodo = props.removeTodo
    var updateTodo = props.updateTodo

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <AiOutlineCloseCircle 
                    onClick={()=>removeTodo(todo.id)}
                    className='delete-icon'
                />
                <FaEdit 
                    onClick={() => setEdit({ id:todo.id, value:todo.text})}
                    className='edit-icon'
                />
            </div>
        </div>
    ))

}

export default Todo
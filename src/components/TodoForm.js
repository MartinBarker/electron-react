import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSubmit = e =>{
        e.preventDefault(); //dont refresh page when submitted
        
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text: input
        })
        
       setInput("")
    }

    const handleChange = e =>{
        setInput(e.target.value);
    }

  return (
    <div>
        <form 
            className='todo-form'
            onSubmit={handleSubmit}
        >
                {props.edit ? (
                <>  
                <input 
                    type="text" 
                    placeholder='update todo' 
                    value={input} 
                    name="text" 
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className='todo-button edit'>Update todo</button>
                </>
            ) : (
                <>
                <input 
                    type="text" 
                    placeholder='add a toto' 
                    value={input} 
                    name="text" 
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                />
                <button className='todo-button'>Add todo</button>
                </>
                )}
            
        </form>
    </div>
  )
}

export default TodoForm
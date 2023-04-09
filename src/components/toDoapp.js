import { useState } from 'react';
import ToDo from './toDo';
import './css/todoApp.css'
export default function Todoapp() {

    const [title, setTitle] = useState('')
    const [toDos, setToDos] = useState([])

    function handleChange(e) {
        const value = e.target.value
        setTitle(value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newToDo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }
        setToDos([...toDos, newToDo])
        setTitle('')
    }

    function handleUpdate(id, newValue) {
        const temp = [...toDos]
        const item = temp.find(item => item.id == id)
        item.title = newValue
        setToDos(temp)
    }

    function handleDelete(id) {
        const temp = toDos.filter(item => item.id !== id)
        setToDos(temp)
    }

    return <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title} />
            <input onClick={handleSubmit} type="submit" value="Create todo" className="buttonCreate" />
        </form>
        <div className='todosContainer'>
            {
                toDos.map(item => (
                    <ToDo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))
            }
        </div>
    </div>
}
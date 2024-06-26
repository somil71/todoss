/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodos'
import { Todos } from './components/Todos'

function App() {
    const [todos, setTodos] = useState ([]);

    return (
        <div>
            <CreateTodo></CreateTodo>
            <Todos todos={todos}></Todos>
        </div>
    )
}

export default App

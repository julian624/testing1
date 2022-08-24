import React, { useState, useId } from 'react'
import '../../src/App.scss'

const TodoApp = () => {
    const id = useId();
    const data = [
        {
            id: id,
            title: "Texto prueba"
        },
        {
            id: id,
            title: "Julianperezcv.vercel.app"
        },
        {
            id: id,
            title: "Hace tanto no usaba un router, me acostumbre a nextjs"
        },
        {
            id: id,
            title: "Front end"
        }
    ];

    const [todos, setTodos] = useState(data);
    const handleAdd = (todo) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            {
                id: id,
                title: todo
            }
        ]);
    };

    return (
        <div className="container">
            <AddTodo handleAddTodo={handleAdd} />
            <TodoList todos={todos} />
        </div>
    );
};

const AddTodo = ({ handleAddTodo }) => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleClick = () => {
        const text = todo.trim();

        if (!text) {
            return;
        }

        setTodo("");

        handleAddTodo(text);
    };

    return (
        <div className='todo'>
            <div >
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="add item"
                    value={todo}
                />
                <button className='todobutton' onClick={handleClick}>
                    Agregar
                </button>
            </div>
        </div>
    );
};

const TodoList = ({ todos, }) => {


    return (
        <div >
            <ul id="todos" className="list-group">
                {todos.map((todo) => (
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={todo.id}
                    >
                        <span>{todo.title}</span>

                    </li>
                ))}
            </ul>
        </div>
    );
};
export default TodoApp

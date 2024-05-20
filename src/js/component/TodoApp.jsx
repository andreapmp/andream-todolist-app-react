import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import TodoFooter from "./TodoFooter";

// styles
import '../../styles/TodoApp.css'


const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div className="todos-wrapper">
                <div>
                    <TodoHeader 
                    todos={todos} 
                    setTodos={setTodos} 
                    newTask={newTask}
                    setNewTask={setNewTask}
                    counter={counter}
                    setCounter={setCounter}
                    />
                </div>
                <div>
                    <TodoBody 
                    todos={todos} 
                    setTodos={setTodos} 
                    />
                </div>
                <div>
                    <TodoFooter todos={todos} />
                </div>
            </div>
        </>
    );
};

export default TodoApp;
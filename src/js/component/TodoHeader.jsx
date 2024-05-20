import React, { useState } from "react";

//styles
import '../../styles/TodoHeader.css'


const TodoHeader = ({todos, setTodos, newTask, setNewTask, counter, setCounter}) => {
    
    const addTask = () => {
		console.log("Creating new task: ", newTask);
		
		let newTodoObject = {
			id: counter,
			title: newTask,
			done: false
		}
		
		setTodos([...todos, newTodoObject])
		setCounter(counter + 1);
	}

    //text validation
    const checkTextBox = () => {
        let textBox = document.querySelector(".task-input");
        if (textBox.value === "") {
            alert ("Please add a task.")
        } else {
            addTask();
        }
    }

	return (
		<>
            <header className="header">
                <h1>todos</h1>
                <input
                className="task-input"
                    type="text"
                    placeholder="What needs to be done?"
                    value={newTask}
                    onChange={event => setNewTask(event.target.value)}
                />
                <button
                    onClick={checkTextBox}
                >Add Task</button>
            </header>
		</>
	);
};

export default TodoHeader;
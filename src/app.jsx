import React from "react";
import { useRef, useState } from "react";
import "../bootstrap.css";
import "./app.css";

const TodoList = () => {
	const [list, setList] = useState([]);
	const inputRef = useRef();

	const clickHandler = () => {
		const text = inputRef.current.value;
		const newTodo = { compeleted: false, text };
		setList([...list, newTodo]);
		inputRef.current.value = "";
	};

	const itemDone = (index) => {
		const todo = [...list];
		todo[index].compeleted = !todo[index].compeleted;
		setList(todo);
	};

	const handleDelete = (index) => {
		const newTodo = [...list];
		newTodo.splice(index, 1);
		setList(newTodo);
	};

	return (
		<div className="app">
			<h2>To Do List</h2>
			<div className="container">
				<ul>
					{list.map(({ compeleted, text }, index) => (
						<div className="item">
							<li
								key={index}
								onClick={() => itemDone(index)}
								className={compeleted ? "done" : ""}>
								{text}
							</li>
							<span className="delete" onClick={() => handleDelete(index)}>
								❌
							</span>
						</div>
					))}
				</ul>
				<input
					type="text"
					placeholder="Add a task..."
					ref={inputRef}
					onSubmit={clickHandler}
				/>
				<button className="btn btn-primary" onClick={clickHandler}>
					Add
				</button>
			</div>
		</div>
	);
};

export default TodoList;

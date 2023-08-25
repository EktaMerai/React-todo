import "./styles.css";
import React, { useRef, useState } from "react";

const Todo = () => {
  const refval = useRef(null);
  const [todos, setTodos] = useState([]);

  const handPress = (e) => {
    if (e.key === "Enter") {
      setTodos([
        ...todos,
        { text: e.target.value, completed: false, id: Date.now() }
      ]);
      refval.current.value = "";
    }
  };
  console.log(todos);
  return (
    <>
      <input type="text" ref={refval} onKeyPress={handPress} />
      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          <span>{todo.text}</span>
        </div>
      ))}
    </>
  );
};
export default Todo;

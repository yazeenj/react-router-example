import Todos from "./Todos";
import { useState, useRef, useEffect } from "react";

function TodoList() {
  let [todos, setTodos] = useState([]);

  let userInput = useRef();

  function addTodo() {
    let newTodo = userInput.current.value;
    setTodos(function (prevState) {
      return [...prevState, newTodo];
    });
  }

  useEffect(function () {
    let data = JSON.parse(localStorage.getItem("TodoData"));
    setTodos(data);
  }, []);

  useEffect(
    function () {
      localStorage.setItem("TodoData", JSON.stringify(todos));
    },
    [todos]
  );

  function removeLocal() {
    localStorage.clear();
  }

  return (
    <div>
      <input ref={userInput} type="text" />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={removeLocal}>Remove Local</button>
      <Todos todosData={todos} />
    </div>
  );
}

export default TodoList;

import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import axios from "axios";
import { Fragment, useEffect, useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [idTodo, setIdTodo] = useState(null);
  const inputUpdateRef = useRef();
  const getData = async () => {
    const { data } = await axios.get("https://opentodolist.herokuapp.com/");
    setTodos(data);
  };
  const editTodo = async () => {
    await axios.patch(`https://opentodolist.herokuapp.com/${idTodo}`, {
      todo: inputUpdateRef.current.value,
    });
    setShowInput(false);
    getData();
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Fragment>
    <div className="todo-app">
      <h1>What's the plan for today?</h1>
      <Form getData={getData} />
      {showInput ? (
        <div className="todo-form">
          <input
            placeholder="Update your todo"
            name="text"
            className="todo-input edit"
            ref={inputUpdateRef}
          ></input>
          <button className="todo-button edit" onClick={() => editTodo()}>
            Update
          </button>
        </div>
      ) : (
        <Todo
          getData={getData}
          todos={todos}
          setShowInput={setShowInput}
          setIdTodo={setIdTodo}
        />
      )}
    </div>
    <footer>© All Rights Reserved To Abdullah Taha</footer>
    </Fragment>
  );
}

export default App;

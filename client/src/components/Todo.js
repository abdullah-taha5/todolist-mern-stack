import React, { Fragment, useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import axios from "axios";

function Todo({ getData, todos, setShowInput, setIdTodo }) {
  const deleteTodo = async (id) => {
    await axios.delete(`https://opentodolist.herokuapp.com/${id}`);
    getData();
  };
  const getTodo = (id) => {
    setShowInput(true);
    setIdTodo(id);
  };
  return (
    <div>
      {todos.map((item) => {
        const { todo, _id } = item;
        return (
          <div className="todo-row" key={_id}>
            <div>{todo}</div>
            <div className="icons">
              <RiCloseCircleLine
                className="delete-icon"
                onClick={() => deleteTodo(_id)}
              />
              <TiEdit className="edit-icon" onClick={() => getTodo(_id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;

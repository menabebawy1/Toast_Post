import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //delete todo function

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(
        todos.filter((todo) => todo.post_id !== id)
      ); /*changed todo.todo_id to todo.post_id*/
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
          {todos.map((todo) => (
            <div key={todo.post_id} 
            className="bg-dark rounded w-75 mx-auto mt-5 mb-5"
            >
              {/*changed todo.todo_id to todo.post_id*/}
                <img
                  src={todo.url}
                  className="rounded d-block w-100"  
                />
                <EditTodo todo={todo}/>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    deleteTodo(todo.post_id)
                  } /*changed todo.todo_id to todo.post_id*/
                >
                  Delete
                </button>
            </div>
          ))}
    </Fragment>
  );
};

export default ListTodos;

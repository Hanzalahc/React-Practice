import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

 
  const handleUpdate = (todo) => {
    setEditingTodoId(todo.id); 
    setUpdatedText(todo.text); 
  };

  
  const saveUpdatedTodo = () => {
    if (updatedText.trim() === "") {
      alert("Todo text cannot be empty!");
      return;
    }
    dispatch(updateTodo({ id: editingTodoId, text: updatedText }));
    setEditingTodoId(null); 
    setUpdatedText("");
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingTodoId === todo.id ? (
              
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                className="text-black px-2 py-1 rounded w-2/3"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className="flex space-x-2">
              {editingTodoId === todo.id ? (
                
                <button
                  onClick={saveUpdatedTodo}
                  className="text-white bg-green-500 py-1 px-4 rounded hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                
                <button
                  onClick={() => handleUpdate(todo)}
                  className="text-white bg-blue-500 py-1 px-4 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 hover:bg-red-600 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

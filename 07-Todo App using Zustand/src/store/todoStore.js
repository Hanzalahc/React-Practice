import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "@reduxjs/toolkit";

export const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: [
        {
          id: 1,
          text: "Initial State",
        },
      ],
      addTodo: (text) => {
        const todo = {
          id: nanoid(),
          text,
        };
        set((state) => ({
          todos: [...state.todos, todo],
        }));
      },
      removeTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
      updateTodo: (id, text) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, text } : todo
          ),
        }));
      },
    }),
    {
      name: "todo-storage",
    }
  )
);

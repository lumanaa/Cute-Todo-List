import React, { useState } from "react";
import dropdown from "../assets/iconcrab/mingcute_down-line/dropdown.svg";
import search from "../assets/iconcrab/basil_search-outline/basil_search-outline.svg";
import sun from "../assets/iconcrab/ph_sun-light/ph_sun-light.svg";
import moon from "../assets/iconcrab/moon.png";
import add from "../assets/iconcrab/basil_plus-outline/basil_plus-outline.svg";

import remove from "../assets/iconcrab/basil_cross-outline/basil_cross-outline.svg";
import check from "../assets/iconcrab/typcn_tick/typcn_tick.svg";

import "./css/todo.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  markAllCompleted,
  removeTodo,
  toggleTodo,
} from "../redux/todoSlice";
import { RootState } from "../redux/store";

interface TodoProps {
  theme: string;
  toggleTheme: () => void;
}

export const Todo: React.FC<TodoProps> = ({ toggleTheme, theme }) => {
  const [newTodo, setNewTodo] = useState("");
  // const [checkTask, setCheckTask] = useState(true);
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  // const [isDark, setDark]= useState(false);

  const handleAddTodo = () => {
    if (newTodo !== "") {
      dispatch(addTodo(newTodo));
      console.log(newTodo);
      setNewTodo("");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleRemoveTodo = (todoId: number) => {
    dispatch(removeTodo(todoId));
  };

  const handleCheckTask = (todoId: number) => {
    dispatch(toggleTodo(todoId));
  };

  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  return (
    <div className='todo'>
      <div className='todo-body'>
        <div className='sort-search'>
          <div className='sort'>
            Default
            <div id='drop'>
              <img src={dropdown} alt='' />
            </div>
          </div>
          <div className='search-body'>
            <input type='text' className='search' placeholder='Search...' />
            <div className='search-icon'>
              <img src={search} alt='' />
            </div>
          </div>
        </div>
      
        <p>
          <a href='https://giphy.com/stickers/cat-pixel-bongo-UQ1EI1ML2ABQdbebup'></a>
        </p>
        <div className='todo-container'>
          <div className='top-container'>
            <p id='heading'>TO DO LIST</p>
            <img
              src={theme === "light" ? sun : moon}
              onClick={toggleTheme}
              alt=''
            />
          </div>
          <div className='add-task-container'>
            <input
              type='text'
              className='add-task'
              placeholder='Add new task...'
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className='add' onClick={handleAddTodo}>
              <img src={add} alt='' />
            </div>
          </div>

          <button className='mark-all' onClick={() => handleMarkAllCompleted()}>
            Mark All Completed
          </button>

          <div
            style={{
              overflowX:"hidden",
              overflowY: "auto",
              maxHeight: "100%", // adjust the height as needed
             
            }}
          >
            {todos.map((todo, index) => (
              <div key={index} className='todo-list-container'>
                <div className='remove-list'>
                  <img
                    src={remove}
                    alt=''
                    className='remove'
                    onClick={() => handleRemoveTodo(todo.id)}
                  />

                  <div
                    className='todo-item'
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    <p>{todo.text}</p>
                  </div>
                </div>

                <div className='check' onClick={() => handleCheckTask(todo.id)}>
                  {todo.completed && <img src={check} alt='' />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

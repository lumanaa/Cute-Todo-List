import React, { useState } from "react";
import dropdown from "../assets/iconcrab/mingcute_down-line/dropdown.svg";
import search from "../assets/iconcrab/basil_search-outline/basil_search-outline.svg";
import sun from "../assets/iconcrab/ph_sun-light/ph_sun-light.svg";
import add from "../assets/iconcrab/basil_plus-outline/basil_plus-outline.svg";
import cat from "../assets/cat.png";
import remove from "../assets/iconcrab/basil_cross-outline/basil_cross-outline.svg";

import "./css/todo.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo,} from "../redux/todoSlice";
import { RootState } from "../redux/store";

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);

  const handleAddTodo = () => {
    if (newTodo !== "") {
      dispatch(addTodo(newTodo));
      console.log(newTodo);
      setNewTodo("");
    }
  };

  const handleRemoveTodo = (todo:number) => {
   dispatch(removeTodo(todo));
  }
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
        <img src={cat} alt='' className='cat' />
        <p>
          <a href='https://giphy.com/stickers/cat-pixel-bongo-UQ1EI1ML2ABQdbebup'></a>
        </p>
        <div className='todo-container'>
          <div className='top-container'>
            <p id='heading'>TO DO LIST</p>
            <img src={sun} alt='' />
          </div>
          <div className='add-task-container'>
            <input
              type='text'
              className='add-task'
              placeholder='Add new task...'
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <div className='add' onClick={handleAddTodo}>
              <img src={add} alt='' />
            </div>
          </div>

          <button className='mark-all'>Mark All Completed</button>

          {todos.map((todo, index) => (
            <div key={index} className='todo-list-container'>
              <img src={remove} alt='' className="remove" onClick={()=> handleRemoveTodo(todo.id)}/>
              <li 
                style={{
                  listStyle: "none",
                  fontSize: "24px",
                  letterSpacing: "3px",
                  margin: "0.6rem",
                }}
                
              >
                {todo.text}
              </li>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

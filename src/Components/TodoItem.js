import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    setVisible(false); // Trigger fade-out animation
    setTimeout(() => {
      dispatch(deleteTodo({ id: id }));
    }, 500); // Adjust duration to match animation time
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        completed ? "list-group-item-success" : ""
      } ${visible ? "fade-in" : "fade-out"}`}
    >
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCompleteClick}
          style={{ marginRight: "10px" }} // Adjust spacing here
        />
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>
          {title}
        </span>
      </div>
      <button className="btn btn-danger" onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

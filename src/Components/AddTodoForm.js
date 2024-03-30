import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value.trim() !== "") {
      dispatch(
        addTodo({
          title: value.trim(),
        })
      );
      setValue(""); // Clear input after submitting
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-3 mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded-right-0"
          placeholder="Add todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary rounded-0">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState(""); // State to store input value
  const dispatch = useDispatch(); // Redux dispatch function

  // Function to handle form submission
  const onSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (value.trim() !== "") {
      // Check if input value is not empty
      // Dispatch action to add todo with title from input value
      dispatch(addTodo({ title: value.trim() }));
      setValue(""); // Clear input after submitting
    }
  };

  return (
    // Form element with input field and submit button
    <form onSubmit={onSubmit} className="mt-3 mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded-right-0"
          placeholder="Add todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)} // Update input value
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

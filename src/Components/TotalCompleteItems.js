import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const completedTodos = useSelector(
    (state) => state.todos?.filter((todo) => todo.completed === true) // Filter completed todos
  );

  return (
    <div className="card mt-3">
      <div className="card-body d-flex align-items-center gap-2">
        <h4 className="card-title mb-0 text-muted fs-5">
          Total Complete Items:
        </h4>
        <span className="badge bg-secondary">{completedTodos?.length}</span>
      </div>
    </div>
  );
};

export default TotalCompleteItems;

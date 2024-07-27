import React from "react";

const TaskCounts = ({ totalTasks, completedTasks, incompleteTasks }) => {
  return (
    <div className="task-counts">
      <p>Total Tasks: {totalTasks}</p>
      <p className="completed">Completed Tasks: {completedTasks}</p>
      <p className="incomplete">Incomplete Tasks: {incompleteTasks}</p>
    </div>
  );
};

export default TaskCounts;

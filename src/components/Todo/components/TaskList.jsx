import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({
  filteredTasks,
  toggleTaskCompletion,
  openEditDialog,
  deleteTask,
}) => {
  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <li key={task.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <div className="task" style={{ flex: 1 }}>
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id, task.completed)}
              style={{ marginRight: '8px' }}
            />
            {task.completed ? (
              <span className="completed-task">{task.title}</span>
            ) : (
              <span>{task.title}</span>
            )}
          </div>
          <div className="task-buttons" style={{ marginLeft: '8px' }}>
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => openEditDialog(task.id, task.title)}
              style={{ cursor: 'pointer', color: '#ebe2e2', fontSize: '24px', marginRight: '8px' }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteTask(task.id)}
              style={{ cursor: 'pointer', color: '#dee1f0', fontSize: '24px' }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

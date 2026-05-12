import React from "react";
import TaskCard from "./TaskCard";
import { Droppable } from "@hello-pangea/dnd";
import "../styles/column.css";
import { Plus } from "lucide-react";

const Column = ({ title, tasks, onAdd, onTaskClick, columnId }) => {
  return (
    <div className="column">
      <div className="column-header">
        <div className="column-title">
          <span className="title">{title}</span>
          <span className="count">{tasks.length}</span>
        </div>
        <button className="add-task-btn" onClick={onAdd}>
          <Plus size={16} className="add-task-icon"/>
        </button>
      </div>

      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            className="column-body"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <TaskCard
                key={task.id}
                task={task}
                index={index}
                onClick={(task) => onTaskClick(task)}
              />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;

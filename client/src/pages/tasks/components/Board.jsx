import React from "react";
import Column from "./Column";
import { DragDropContext } from "@hello-pangea/dnd";
import "../styles/board.css";

const Board = ({ tasks, setTasks, onAddTask, columns, onTaskClick, sprint }) => {

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== draggableId) return task;

        // Move to backlog
        if (destination.droppableId === "backlog") {
          return {
            ...task,
            sprintId: null,
          };
        }

        // Move inside board
        return {
          ...task,
          sprintId: sprint.id,
          status: destination.droppableId,
        };
      })
    );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="board">
        {columns.map((col) => (
          <Column
            key={col.key}
            columnId={col.key}
            title={col.title}
            tasks={tasks.filter((t) => t.status === col.key)}
            onAdd={() => onAddTask(col.key)}
            onTaskClick={onTaskClick}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default Board;
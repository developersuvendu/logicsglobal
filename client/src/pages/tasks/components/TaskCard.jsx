import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { Clock } from "lucide-react";
import { USERS } from "../../../constants/users";
import "../styles/taskCard.css";
import { PRIORITY_CONFIG } from "../../../constants/priorityConfig";

const TaskCard = ({ task, index, onClick }) => {
  const user = USERS[task.assignee];
  const priority = PRIORITY_CONFIG[task.priority];

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="task-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={() => onClick(task)}
        >
          {/* Top Row */}
          <div className="task-top">
            <span className={`task-type ${task.type}`}>{task.type}</span>

            <div className="avatar" title={user?.name}>
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} />
              ) : (
                <span>{task.assignee?.[0]?.toUpperCase()}</span>
              )}
            </div>
          </div>

          <div className="task-id">
            {task.code || "LGTS-201"} :
            <span className="task-title"> {task.title}</span>
          </div>

          <div className="task-meta">
            <span className={`priority ${task.priority}`}>
              ● {priority?.label}
            </span>

            <div className="meta-right">
              <span>
                <Clock size={14} /> {task.time || "4h"}
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

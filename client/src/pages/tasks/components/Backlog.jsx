import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { Clock } from "lucide-react";
import "../styles/backlog.css";
import { USERS } from "../../../constants/users";

const dummyBacklog = [
  {
    id: "LGTS-201",
    title: "User Profile UI",
    type: "story",
    priority: "medium",
    status: "todo",
    time: "4h",
    assignee: "John Doe",
  },
  {
    id: "LGTS-202",
    title: "Fix Login API Issue",
    type: "bug",
    priority: "high",
    status: "inprogress",
    time: "6h",
    assignee: "Alexa Morris",
  },
  {
    id: "LGTS-203",
    title: "Dashboard Analytics Setup",
    type: "task",
    priority: "low",
    status: "ready",
    time: "3h",
    assignee: "John Doe",
  },
  {
    id: "LGTS-204",
    title: "Employee Module UI",
    type: "story",
    priority: "medium",
    status: "done",
    time: "5h",
    assignee: "John Doe",
  },
  {
    id: "LGTS-205",
    title: "Fix Sidebar Overlap",
    type: "bug",
    priority: "high",
    status: "ready",
    time: "2h",
    assignee: "Alexa Morris",
  },
];

/* GROUPING */
const groupByType = (tasks) => ({
  story: tasks.filter((t) => t.type === "story"),
  task: tasks.filter((t) => t.type === "task"),
  bug: tasks.filter((t) => t.type === "bug"),
});

const formatStatus = (status) => {
  if (status === "inprogress") return "In Progress";
  if (status === "ready") return "Ready For Testing";
  return status?.charAt(0).toUpperCase() + status?.slice(1);
};

const Backlog = ({ tasks = [] }) => {
  const data = tasks.length ? tasks : dummyBacklog;
  const grouped = groupByType(data);

  const renderSection = (title, items, droppableId) => (
    <div className="backlog-section">
      <div className="section-header">
        <h4>{title}</h4>
        <span className="count">{items.length}</span>
      </div>

      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            className="section-list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((task, index) => {
              const user = USERS[task.assignee?.toLowerCase()];

              return (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      className="backlog-card"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {/* LEFT */}
                      <div className="card-left">
                        <span className={`priority-dot ${task.priority}`} />
                        <span className="issue-id">{task.id}</span>
                      </div>

                      {/* CENTER (SINGLE ROW) */}
                      <div className="card-center">
                        <span className="title">{task.title}</span>

                      

                        <span className={`status ${task.status}`}>
                          {formatStatus(task.status)}
                        </span>

                        <span className="time">
                          <Clock size={15} /> {task.time}
                        </span>
                      </div>

                      {/* RIGHT */}
                      <div className="card-right">
                        <div className="avatar" title={user?.name}>
                          {user?.avatar ? (
                            <img src={user.avatar} alt={user.name} />
                          ) : (
                            <span>
                              {task.assignee?.[0]?.toUpperCase() || "?"}
                            </span>
                          )}
                        </div>
                        <span className="assignee-name">
                          {user?.name || task.assignee}
                        </span>
                      </div>
                    </div>
                  )}
                </Draggable>
              );
            })}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );

  return (
    <div className="backlog-container">
      <div className="backlog-header">
        <h3>Backlog</h3>
        <span>{data.length} Issues</span>
      </div>

      {renderSection("Stories", grouped.story, "story")}
      {renderSection("Tasks", grouped.task, "task")}
      {renderSection("Bugs", grouped.bug, "bug")}
    </div>
  );
};

export default Backlog;
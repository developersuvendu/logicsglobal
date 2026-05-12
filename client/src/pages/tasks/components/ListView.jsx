import React from "react";
import { Sparkles, ClipboardCheck, AlertTriangle } from "lucide-react";
import "../styles/listView.css";
import { USERS } from "../../../constants/users";

const getIcon = (type) => {
  switch (type) {
    case "story":
      return <Sparkles size={18} className="icon story" />;
    case "task":
      return <ClipboardCheck size={18} className="icon task" />;
    case "bug":
      return <AlertTriangle size={18} className="icon bug" />;
    default:
      return null;
  }
};

const getPriorityDot = (priority) => {
  return <span className={`priority-dot ${priority}`} />;
};

const dummyList = [
  {
    id: "LGTS-201",
    title: "Login Feature",
    type: "story",
    assignee: "John Doe",
    priority: "high",
    status: "inprogress",
    sprint: "Sprint 3",
    created: "2024-05-10",
    due: "2024-05-18",
  },
  {
    id: "LGTS-202",
    title: "Fix Navbar Bug",
    type: "bug",
    assignee: "Ravi Kumar",
    priority: "medium",
    status: "todo",
    sprint: "Sprint 3",
    created: "2024-05-12",
    due: "2024-05-20",
  },
];
const formatStatus = (status) => {
  if (!status) return "";

  return (
    status
      .replace(/([A-Z])/g, " $1")
      .replace("todo", "To Do")
      .replace("inprogress", "In Progress")
      .replace("readyfortesting", "Ready for Testing")
      .toLowerCase()
      .replace(/\b\w/g, (c) => c.toUpperCase())
  );
};

const ListView = ({ tasks = [] }) => {
  const data = tasks.length ? tasks : dummyList;
  return (
    <div className="list-view">
      <div className="table-container">
        <table>
          <colgroup>
            <col className="col-id" />
            <col className="col-title" />
            <col className="col-assignee" />
            <col className="col-status" />
            <col className="col-sprint" />
            <col className="col-date" />
            <col className="col-date" />
          </colgroup>

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Sprint</th>
              <th>Created</th>
              <th>Due Date</th>
            </tr>
          </thead>

          <tbody>
            {data.map((task, index) => {
              const user = USERS[task.assignee];
              return (
                <tr key={task.id || index}>
                  {/* ID + Priority Dot */}
                  <td>
                    <div className="id-cell">
                      {getPriorityDot(task.priority)}
                      <span className="issue-id">
                        {task.displayId ||
                          `LGTS-${String(task.id).padStart(2, "0")}`}
                      </span>
                    </div>
                  </td>

                  {/* Title + Icon */}
                  <td>
                    <div className="title-cell">
                      {getIcon(task.type)}
                      <span className="title-text">{task.title}</span>
                    </div>
                  </td>

                  {/* Assignee */}
                  <td>
                    <div className="assignee-cell">
                      <div className="avatar" title={user?.name}>
                        <img src={user.avatar} alt={user.name} />
                      </div>
                      <span>{user?.name || task.assignee}</span>
                    </div>
                  </td>

                  {/* Status */}
                  <td>
                    <span className={`status ${task.status}`}>
                      {formatStatus(task.status)}
                    </span>
                  </td>

                  {/* Sprint */}
                  <td className="muted">{task.sprint}</td>

                  {/* Dates */}
                  <td className="muted">{task.createDate}</td>
                  <td className="muted">{task.dueDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListView;

import React, { useState } from "react";
import TaskHeader from "./components/TaskHeader";
import FilterBar from "./components/FilterBar";
import CreateTaskModal from "./components/CreateTaskModal";
import Board from "./components/Board";
import SprintModal from "./components/SprintModal";
import Backlog from "./components/Backlog";
import ListView from "./components/ListView";
import Timesheet from "./components/Timesheet";
import { DragDropContext } from "@hello-pangea/dnd";
import Reports from "./components/reports/Reports";
import "./styles/tasks.css";
const Tasks = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("todo");
  const [sprint, setSprint] = useState({
    id: "sprint-1",
    name: "Sprint 3",
    goal: "",
    startDate: "2023-04-27",
    endDate: "2023-05-11",
    status: "active",
  });
  const [sprintOpen, setSprintOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("board");

  const [columns, setColumns] = useState([
    { key: "todo", title: "To Do" },
    { key: "inprogress", title: "In Progress" },
    { key: "readyfortesting", title: "Ready For Testing" },
    { key: "done", title: "Done" },
  ]);

  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Logics Global Management Agile Board Setup",
      status: "todo",
      priority: "high",
      type: "task",
      assignee: "John Doe",
      sprint: "Sprint 3",
      parent: "Epic 1",
      sprintId: "sprint-1",
      createDate: "2024-05-01",
      dueDate: "2024-05-10",
    },
    {
      id: "2",
      title: "Logics Global Management Sprint Planning",
      status: "inprogress",
      priority: "low",
      type: "bug",
      assignee: "Alexa Morris",
      sprint: "Sprint 2",
      parent: "Epic 2",
      sprintId: "sprint-1",
      createDate: "2024-05-02",
      dueDate: "2024-05-12",
    },
    {
      id: "3",
      title: "Logics Global Management Social UI Setup",
      status: "inprogress",
      priority: "medium",
      type: "bug",
      assignee: "John Doe",
      sprint: "Sprint 2",
      parent: "Epic 2",
      sprintId: "sprint-1",
      createDate: "2024-05-03",
      dueDate: "2024-05-15",
    },
    {
      id: "4",
      title: "Logics Global Management Agile Board Setup",
      status: "todo",
      priority: "high",
      type: "task",
      assignee: "Alexa Morris",
      sprint: "Sprint 3",
      parent: "Epic 1",
      sprintId: "sprint-1",
      createDate: "2024-05-04",
      dueDate: "2024-05-14",
    },
    {
      id: "5",
      title: "Logics Global Management Sprint Planning",
      status: "readyfortesting",
      priority: "medium",
      type: "bug",
      assignee: "John Doe",
      sprint: "Sprint 2",
      parent: "Epic 2",
      sprintId: "sprint-1",
      createDate: "2024-05-05",
      dueDate: "2024-05-15",
    },
    {
      id: "6",
      title: "Logics Global Management Sprint Planning",
      status: "done",
      priority: "medium",
      type: "story",
      assignee: "Alexa Morris",
      sprint: "Sprint 2",
      parent: "Epic 2",
      sprintId: "sprint-1",
      createDate: "2024-05-06",
      dueDate: "2024-05-16",
    },
    {
      id: "7",
      title: "Logics Global Management Agile Board Setup",
      status: "todo",
      priority: "high",
      type: "task",
      assignee: "John Doe",
      sprint: "Sprint 3",
      parent: "Epic 1",
      sprintId: "sprint-1",
      createDate: "2024-05-07",
      dueDate: "2024-05-17",
    },
    {
      id: "8",
      title: "Logics Global Management Sprint Planning",
      status: "readyfortesting",
      priority: "medium",
      type: "story",
      assignee: "Alexa Morris",
      sprint: "Sprint 2",
      parent: "Epic 2",
      sprintId: "sprint-1",
      createDate: "2024-05-08",
      dueDate: "2024-05-18",
    },
    {
      id: "9",
      title: "Logics Global Management Sprint Planning",
      status: "inprogress",
      priority: "low",
      type: "story",
      assignee: "Alexa Morris",
      sprint: "Sprint 2",
      parent: "Epic 2",
      sprintId: "sprint-1",
      createDate: "2024-05-09",
      dueDate: "2024-05-19",
    },
  ]);

  const sprints = ["Sprint 1", "Sprint 2", "Sprint 3"];

  const [selectedTask, setSelectedTask] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const backlogTasks = tasks.filter(
    (t) => !t.sprintId || t.sprintId !== sprint.id,
  );

  // ➕ Add column
  const handleAddColumn = () => {
    const key = prompt("Enter status key (no spaces):");
    const title = prompt("Enter status title:");
    if (!key || !title) return;

    setColumns((prev) => [...prev, { key, title }]);
  };

  // ➕ Create task
  const handleCreate = (task) => {
    setTasks((prev) => [
      ...prev,
      {
        ...task,
        sprintId: sprint.id, // 👈 IMPORTANT
        comments: [],
        activity: [],
      },
    ]);
  };

  // 🔍 Filter logic
  const filteredTasks = tasks
    .filter((task) => task.sprintId === sprint.id)
    .filter((task) => {
      // Search
      if (search && !task.title.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }

      // Work Type
      if (
        selectedFilters["Work Type"] &&
        !selectedFilters["Work Type"].includes(task.type)
      ) {
        return false;
      }

      // Assignee
      if (
        selectedFilters["Assignee"] &&
        !selectedFilters["Assignee"].includes(task.assignee)
      ) {
        return false;
      }

      // Priority
      if (
        selectedFilters["Priority"] &&
        !selectedFilters["Priority"].includes(task.priority)
      ) {
        return false;
      }

      // Sprint
      if (
        selectedFilters["Sprint"] &&
        !selectedFilters["Sprint"].includes(task.sprint)
      ) {
        return false;
      }

      // Parent
      if (
        selectedFilters["Parent"] &&
        !selectedFilters["Parent"].includes(task.parent)
      ) {
        return false;
      }

      return true;
    });

  // ➕ Add from column
  const handleAddFromColumn = (status) => {
    setSelectedStatus(status);
    setOpen(true);
  };

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id !== draggableId) return task;

        // 👉 Move to backlog
        if (destination.droppableId === "backlog") {
          return {
            ...task,
            sprintId: null,
          };
        }

        // 👉 Move to board
        return {
          ...task,
          sprintId: sprint.id,
          status: destination.droppableId,
        };
      }),
    );
  };

  return (
    <div className="task-section">
      <TaskHeader
        onCreate={() => setOpen(true)}
        onAddColumn={handleAddColumn}
        onOpenSprint={() => setSprintOpen(true)}
        onTabChange={setActiveTab}
        activeTab={activeTab}
        sprint={sprint}
        setActiveTab={setActiveTab}
      />

      {activeTab !== "timesheet" && activeTab !== "reports" && (
        <FilterBar
          setSearch={setSearch}
          sprints={sprints}
          tasks={tasks}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          onCreate={() => setOpen(true)}
          onAddColumn={handleAddColumn}
          sprint={sprint}
        />
      )}

      <CreateTaskModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreate}
      />

      <DragDropContext onDragEnd={handleDragEnd}>
        {activeTab === "board" && (
          <Board
            tasks={filteredTasks}
            setTasks={setTasks}
            columns={columns}
            onAddTask={handleAddFromColumn}
            onTaskClick={(task) => {
              setSelectedTask(task);
              setDetailOpen(true);
            }}
            sprint={sprint}
          />
        )}

        {activeTab === "backlog" && <Backlog tasks={backlogTasks} />}
      </DragDropContext>

      <SprintModal
        isOpen={sprintOpen}
        onClose={() => setSprintOpen(false)}
        sprint={sprint}
        setSprint={setSprint}
        setTasks={setTasks} // ✅ ADD THIS
      />
      {/* {activeTab === "backlog" && <Backlog tasks={backlogTasks} />} */}

      {activeTab === "list" && <ListView tasks={tasks} />}

      {activeTab === "timesheet" && <Timesheet tasks={tasks} sprint={sprint} />}
      {activeTab === "reports" && <Reports />}
    </div>
  );
};

export default Tasks;

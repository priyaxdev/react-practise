import { useState } from "react";
interface Prop {
  handleClick: () => void;
  taskInput: string;
  setTaskInput: (name: string) => void;
}
const Heading = ({ handleClick, taskInput, setTaskInput }: Prop) => {
  return (
    <>
      <h1>My Task</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          aria-label="Add a new task"
          aria-describedby="button-addon2"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleClick()}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleClick}
        >
          + Add task
        </button>
      </div>
    </>
  );
};

interface ButtonProp {
  filter: string;
  setFilter: (f: string) => void;
}

const Button = ({ filter, setFilter }: ButtonProp) => {
  return (
    <>
      <button
        onClick={() => setFilter("all")}
        className={`btn btn-outline-secondary btn ${filter === "all" ? "active" : ""}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`btn btn-outline-secondary btn ${filter === "active" ? "active" : ""}`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("done")}
        className={`btn btn-outline-secondary btn ${filter === "done" ? "active" : ""}`}
      >
        Done
      </button>
    </>
  );
};
interface prop {
  tasks: Task[];
  toggleTask: (id: number) => void;
}

const Tasks = ({ tasks, toggleTask }: prop) => {
  return (
    <ul className="list-group mlst">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item lst">
          <input
            type="checkbox"
            className="form-check-input me-1"
            checked={task.done}
            onChange={() => toggleTask(task.id)}
          />
          <label
            style={{ textDecoration: task.done ? "line-through" : "none" }}
          >
            {task.text}
          </label>
        </li>
      ))}
    </ul>
  );
};
interface props {
  total: number;
  completed: number;
  remaining: number;
}
const Taskanalysis = ({ total, completed, remaining }: props) => {
  return (
    <div className="tsk">
      <button className="btn btn-outline-secondary btn analysis">
        {total}
        <br />
        Total task
      </button>
      <button className="btn btn-outline-secondary btn analysis">
        {completed}
        <br />
        Completed
      </button>
      <button className="btn btn-outline-secondary btn analysis">
        {remaining}
        <br />
        Remaining
      </button>
    </div>
  );
};

interface Task {
  id: number;
  text: string;
  done: boolean;
}
let nextId = 1;
function App() {
  const [taskInput, setTaskInput] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");
  const [tasks, setTasks] = useState<Task[]>([]);
  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  const handleClick = () => {
    if (taskInput === "") {
      alert("invalid task");
    } else {
      setTasks([...tasks, { id: nextId++, text: taskInput, done: false }]);
      setTaskInput("");
    }
  };
  const toggleTask = (id: number) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };
  return (
    <>
      <div className="app">
        <Heading
          handleClick={handleClick}
          taskInput={taskInput}
          setTaskInput={setTaskInput}
        />
        <Button filter={filter} setFilter={setFilter} />
        <br />
        <Tasks tasks={filteredTasks} toggleTask={toggleTask} />
        <br />
        <Taskanalysis
          total={tasks.length}
          completed={tasks.filter((t) => t.done).length}
          remaining={tasks.filter((t) => !t.done).length}
        />
      </div>
    </>
  );
}

export default App;

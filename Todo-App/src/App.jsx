import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Java",
      dueDate: "10/07/24",
    },
    {
      name: "React",
      dueDate: "20/07/24",
    },
    {
      name: "HTML",
      dueDate: "20/07/24",
    },
    {
      name: "CSS",
      dueDate: "20/07/24",
    },
    {
      name: "React",
      dueDate: "20/07/24",
    },
    {
      name: "Javascript",
      dueDate: "20/07/24",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;

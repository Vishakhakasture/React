import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const InitialTodoItems = [
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

  const [todoItems, setTodoItems] = useState(InitialTodoItems);

  const handleNewItem = (itemName, itemDate) => {
    console.log(`new item added: ${itemName} Date : ${itemDate}`);
    const newTodoItems = [...todoItems, { name: itemName, date: itemDate }];
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;

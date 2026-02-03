import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    console.log(`new item added: ${itemName} Date : ${itemDate}`);
    // compact form
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, date: itemDate },
    ]);
    // setTodoItems((currValue) => {
    //   const newTodoItems = [...currValue, { name: itemName, date: itemDate }];
    //   return newTodoItems;
    // });
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    console.log(`Item deleted : ${todoItemName}`);
  };

  const defaultTodoItems = [{ name: "buy ghee", dueDate: "Today" }];

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

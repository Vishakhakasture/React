import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, date: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName,
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    // console.log(`new item added: ${itemName} Date : ${itemDate}`);
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
    // compact form
    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, date: itemDate },
    // ]);
    // setTodoItems((currValue) => {
    //   const newTodoItems = [...currValue, { name: itemName, date: itemDate }];
    //   return newTodoItems;
    // });
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
    // const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    // setTodoItems(newTodoItems);
    // console.log(`Item deleted : ${todoItemName}`);
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
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;

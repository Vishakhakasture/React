import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);
  // console.log(`todo items from contxt ${todoItemsFromContext}`);
  return (
    <div className={styles.itemsConatiner}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={deleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;

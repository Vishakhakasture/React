import { useContext } from "react";
import { RiDeleteBin4Line } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger item-button"
            onClick={() => deleteItem(todoName)}
          >
            <RiDeleteBin4Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

import { RiDeleteBin4Line } from "react-icons/ri";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row item-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            className="btn btn-danger item-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <RiDeleteBin4Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

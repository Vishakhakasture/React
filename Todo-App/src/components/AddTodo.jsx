import { useState, useRef, useContext } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

const AddTodo = () => {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");
  // const noOfUpdates = useRef(0);
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   setTodoDate(event.target.value);
  //   console.log(`no of updates are: ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    console.log(`${todoName} due date ${todoDate}`);
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addNewItem(todoName, todoDate);
    // setTodoName("");
    // setTodoDate("");
  };

  return (
    <div className="container">
      <form className="row item-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            ref={todoNameElement}
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            placeholder="Enter date here"
            ref={todoDateElement}
            // value={todoDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success item-button">
            <MdAddBox />{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;

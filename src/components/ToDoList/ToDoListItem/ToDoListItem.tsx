import { ToDo } from "../../../models/todo-item";
import "./ToDoListItem.scss";

export const ToDoListItem = (props: {
  toDoItem: ToDo;
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  return (
    <li className="todoListItemWrapper">
      <span>{props.toDoItem.text}</span>
      <div className="todoListItemButtons">
        <button
          className="btnTrash"
          onClick={() => {
            props.deleteToDo(props.toDoItem);
          }}
        ></button>
        <button
          className={props.toDoItem.isDone ? "btnCheck" : "btnUncheck"}
          onClick={() => {
            props.updateToDo(props.toDoItem);
          }}
        ></button>
      </div>
    </li>
  );
};

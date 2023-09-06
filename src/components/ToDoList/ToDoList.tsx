import { ToDo } from "../../models/todo-item";
import "./ToDoList.scss";
import { ToDoListItem } from "./ToDoListItem/ToDoListItem";

export const TodoList = (props: {
  todos: ToDo[],
  updateToDo: Function,
  deleteToDo: Function
}) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item, indx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={indx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item, indx) => {
        return (
          <ToDoListItem
            toDoItem={item}
            key={indx}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  return (
    <div className="todoContainer">
      <ul className="todoList failed">{checkedList()}</ul>
      <ul className="todoList completed">{unCheckedList()}</ul>
    </div>
  );
};

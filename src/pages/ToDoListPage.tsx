import { useState } from "react";
import { Form } from "../components/Form/Form";
import { TodoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-item";

export const ToDoListPage = () => {

  const [todos, setTodos] = useState<ToDo[]>([    {
    id: 1,
    text: "Первая задача",
    isDone: false,
  },
  {
    id: 1,
    text: "Вторая задача",
    isDone: true,
  },
  {
    id: 2,
    text: "Третья задача",
    isDone: true,
  },
]);

  const createNewTodo = (text: string) => {
    const newToDo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false
    }
    setTodos([...todos, newToDo])
  }

  const updateToDo = (toDoItem: ToDo) => {

    const newTodos = todos.map((todo) => {
      if(todo.id === toDoItem.id){
        todo.isDone = !todo.isDone;
      }
      return todo;
    })
    setTodos(newTodos);

    console.log('update');
    console.log(toDoItem);
  }

  const deleteToDo = (toDoItem: ToDo) => {

    const newTodos = todos.filter((todo)=>todo.id !== toDoItem.id)
    setTodos(newTodos);


    console.log('delete');
    console.log(toDoItem);
  }

  return (
    <>
      <Form createNewTodo = {createNewTodo} />
      <TodoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
    </>
  );
};

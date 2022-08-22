import React, { useState } from "react";
import Todos from "./Components/Todos";
import TodoType from "./Components/Models/TodoType";
import NewTodoForm from "./Components/NewTodoForm";
import styles from "../src/CSS/app.module.css";

function App() {
  const [todoArr, setTodoArr] = useState<TodoType[]>([]);
  const onAddTodo = (input: string) => {
    const todo = new TodoType(input);
    setTodoArr((prevArr) => prevArr.concat(todo));
  };

  const onRemoveItem = (id: string) => {
    setTodoArr((prevArr) => prevArr.filter((item) => item.id !== id));
  };
  return (
    <div className={styles["app-div"]}>
      <NewTodoForm onAddTodo={onAddTodo}></NewTodoForm>
      <Todos items={todoArr} onRemoveItem={onRemoveItem}></Todos>
    </div>
  );
}

export default App;

import React, { useRef } from "react";
import styles from "../CSS/app.module.css";

const NewTodoForm: React.FC<{ onAddTodo: (input: string) => void }> = (
  props
) => {
  const todo = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const input = todo.current!.value;
    if (input?.trim().length === 0) {
      return;
    }

    props.onAddTodo(input);
    todo.current!.value = "";
  };
  return (
    <form onSubmit={onSubmitHandler} className={styles["form"]}>
      <label htmlFor="todo-text">Enter a Todo:</label>
      <input type="text" id="todo-text" ref={todo}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewTodoForm;

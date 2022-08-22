import React from "react";
import TodoType from "./Models/TodoType";
import styles from "../CSS/app.module.css";

const TodoItems: React.FC<{
  items: TodoType[];
  onRemoveItem: (id: string) => void;
}> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={Math.random()}>
          <div className={styles["list-item-div"]}>
            <span className={styles["list-item-text"]}>{item.text}</span>
            <span>
              <button
                onClick={props.onRemoveItem.bind(null, item.id)}
                className={styles["list-item-remove-button"]}
              >
                x
              </button>
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoItems;

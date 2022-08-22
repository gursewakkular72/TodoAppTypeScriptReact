import React from "react";
import TodoType from "./Models/TodoType";
import TodoItems from "./TodoItems";

const Todos: React.FC<{
  items: TodoType[];
  onRemoveItem: (id: string) => void;
}> = (props) => {
  return (
    <TodoItems
      items={props.items}
      onRemoveItem={props.onRemoveItem}
    ></TodoItems>
  );
};

export default Todos;

import React from "react";

const TodoItem = props => {
  return (
    <div className="TodoItem" onClick={() => props.delete(props.id)}>
      {props.text}
    </div>
  );
};

export default TodoItem;

import React from "react";
import { useDispatch } from "../Context";
import { DEL, UNCOMPLETE } from "../actions";

export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <span>{text}</span>
      <button onClick={() => dispatch({ type: DEL, payload: id })}>DEL</button>
      <button onClick={() => dispatch({ type: UNCOMPLETE, payload: id })}>
        UNCOMPLETED
      </button>
    </li>
  );
};

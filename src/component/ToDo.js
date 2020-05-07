import React from "react";
import { useDispatch } from "../Context";
import { DEL, COMPLETE, EDIT } from "../actions";

export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();

  return (
    <li key={id}>
      <span>{text}</span>
      <button onClick={() => dispatch({ type: DEL, payload: id })}>DEL</button>
      <button onClick={() => dispatch({ type: COMPLETE, payload: id })}>
        COMPLETED
      </button>
      {/* <button onClick={() => dispatch({ type: EDIT, payload: id })}>
        EDIT
      </button> */}
    </li>
  );
};

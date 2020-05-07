import React, { useState } from "react";
import { EDIT } from "../actions";
import { useDispatch } from "../Context";

export default () => {
  const [editToDo, setEditToDo] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: EDIT, payload: editToDo });
    setEditToDo("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setEditToDo(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={editToDo}
        type="text"
        placeholder="Edit to do"
        onChange={onChange}
      />
    </form>
  );
};

import React from "react";
import { useToDos } from "../Context";

import Add from "./Add";
import List from "./List";
import ToDo from "./ToDo";
import Complete from "./Complete";
import Edit from "./Edit";

function App() {
  const { toDos, completed } = useToDos();

  return (
    <>
      <div className="App">
        <h1>Write ToDO</h1>
        <Add></Add>
        <List name={"To Does"}>
          {toDos.map((todo) => (
            <ToDo key={todo.id} text={todo.text} id={todo.id}></ToDo>
          ))}
        </List>
        {/* <Edit></Edit> */}
        <List name={completed.length !== 0 ? "Completed" : ""}>
          {" "}
          {completed.map((todo) => (
            <Complete key={todo.id} text={todo.text} id={todo.id}></Complete>
          ))}
        </List>
      </div>
    </>
  );
}

export default App;

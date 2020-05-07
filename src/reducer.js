import { v4 as uuidv4 } from "uuid";
import { ADD, DEL, COMPLETE, UNCOMPLETE, EDIT } from "./actions";

export const initialState = {
  toDos: [],
  completed: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuidv4() }],
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo.id !== action.payload),
        completed: state.completed.filter((todo) => todo.id !== action.payload),
      };
    case EDIT:
      const etarget = state.toDos.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        toDos: [...state.toDos, { ...etarget }],
      };
    case COMPLETE:
      const target = state.toDos.find((toDo) => toDo.id === action.payload);
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
        completed: [...state.completed, { ...target }],
      };
    case UNCOMPLETE:
      const ttarget = state.completed.find(
        (toDo) => toDo.id === action.payload
      );
      return {
        ...state,
        completed: state.completed.filter((toDo) => toDo.id !== action.payload),
        toDos: [...state.toDos, { ...ttarget }],
      };
    default:
      throw new Error();
  }
}

export default reducer;

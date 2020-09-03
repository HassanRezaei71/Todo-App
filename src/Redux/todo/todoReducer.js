import types from "./todoTypes";
import { v4 as uid } from "uuid";
const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_TO_DO:
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };
    case types.DELETE_TO_DO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== payload),
      };
    case types.UPDATE_TO_DO:
      return {
        ...state,
        todoList: state.todoList.map((item) => (item.id === payload.id ? payload : item)),
      };
    case types.DONE_TOGGLE:
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === payload.todoId
            ? {
                ...item,
                subTask: item.subTask.map((sub) =>
                  sub.id === payload.itemId ? { ...sub, status: !sub.status } : sub
                ),
              }
            : item
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;

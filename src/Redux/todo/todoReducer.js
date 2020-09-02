import types from "./todoTypes";
import {v4 as uId} from "uuid";

const initialState = {
  todoList: [
    {id:uId,title: "Task1",subTask:[{id:uId(),title:"text1",status:false}]},
    {id:uId,title: "Task1",subTask:[{id:uId(),title:"text1",status:false}]}
  ],
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
        todoList: state.todoList.map((item) =>
          item.id === payload.id
            ? {
                id: payload.id,
                done: false,
                text: payload.text,
              }
            : item
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
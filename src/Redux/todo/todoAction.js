import types from './todoTypes';

export const addTodo = todo=>{
    return {
        type: types.ADD_TO_DO,
        payload: todo
    }
}

export const deleteTodo = todoId =>{
    return {
        type: types.DELETE_TO_DO,
        payload: todoId
    }
}

export const editTodo = (todo)=>{
    return {
        type: types.UPDATE_TO_DO,
        payload: todo
    }
}

export const toggleDoneTodo = (todoId,itemId)=>{
    return {
        type: types.DONE_TOGGLE,
        payload: {todoId,itemId}
    }
}
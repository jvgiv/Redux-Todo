

export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const ALTER_TODO = "ALTER_TODO"

export const changeTodo = todo => {
    // console.log(index);
    return {
        type: ADD_TODO,
        id: Date.now(),
        payload: todo
    }
}

export const alterTodo = id=> {
    return {
        type: ALTER_TODO,
        payload: id
    }
}

export const deleteTodo = todo => {
    console.log(todo);
    return {
        type: DELETE_TODO,
        payload: todo
    }
}
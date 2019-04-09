import { ADD_TODO, DELETE_TODO, ALTER_TODO } from '../actions'

const initialState = {
    todo: []
}
const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_TODO:
        // const newTodo = { dogBanana: action.payload }
            return {
                ...state,
                todo: [...state.todo, { name: action.payload, id: Date.now(), isClicked: false }]
            }
        case ALTER_TODO:
            return{
                ...state,
                // isClicked: [...state.isClicked, { isClicked: action.payload }]
                todo: state.todo.map(todoItem => todoItem.id === action.payload ? {...todoItem, isClicked: !todoItem.isClicked } : todoItem)
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(clickedItems => !( clickedItems.isClicked ))
            }
            default: 
                return state;
    }
}

export default reducer
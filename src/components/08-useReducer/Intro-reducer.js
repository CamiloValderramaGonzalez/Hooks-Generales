
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }
    return state;
};

let todos = todoReducer();

let newTodo = {
    id: 2,
    todo: 'Comprar jugo',
    done: false
};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos)


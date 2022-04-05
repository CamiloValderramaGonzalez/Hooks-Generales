import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
    test('Debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    })

    test('Debe Agregar un todo', () => {

        const nuevoTodo = [{
            id: 3,
            desc: 'Aprender Mongo',
            done: false
        }];
        const action = {
            type: 'add',
            payload: nuevoTodo
        }

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, nuevoTodo]);
    })

    test('Debe borrar un todo', () => {
        const action = {
            type: 'delete',
            payload: 1
        }
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
    })

    test('Debe hacer el toggle del todo', () => {
        const action = {
            type: 'toggle',
            payload: 1
        }
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(2);
        expect(state[0].done).toBe(true);
        expect(state[1]).toBe(demoTodos[1]);
    })
})
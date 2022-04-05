import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('Pruebas en <TodoAdd  />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />
    )
    test('Debe Mostrarse Correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe llamar handlerAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);

    });

    test('Debe llamar la fucion handleAddTodo con un argumento', () => {

        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'descripcion'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            done: false,
            descripcion: value
        });
        expect(wrapper.find('input').prop('value')).toBe('');
    })
})

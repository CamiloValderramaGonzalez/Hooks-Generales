import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en MultipleCustomHooks', () => {

    useCounter.mockReturnValue({
        counter: 1
    });

    test('Debe mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe mostrarse la informacion', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Camilo',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('p').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('figcaption').text().trim()).toBe('Camilo');

    })
})
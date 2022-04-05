import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContex } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <AppRouter />', () => {

    const user = {
        id: 1,
        name: 'Camilo'
    }
    const wrapper = mount(
        <UserContex.Provider value={{
            user
        }} >
            <AppRouter />
        </UserContex.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
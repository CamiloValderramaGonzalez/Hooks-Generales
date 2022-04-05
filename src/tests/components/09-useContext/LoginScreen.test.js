import React from 'react';
import { mount } from 'enzyme'
import { UserContex } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';

describe('Pruebas en <LoginScreen />', () => {

    const user = {
        name: 'Camilo',
        email: 'a@a.com'
    }

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContex.Provider value={{
            user,
            setUser
        }}>

            <LoginScreen />
        </UserContex.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe ejecutarse el setUSer con el argumento esperado', () => {
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({ "email": "", "name": "" })
    })
})
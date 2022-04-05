import React from 'react';
import { mount } from 'enzyme'
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContex } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Camilo',
        email: 'a@a.com'
    }

    const wrapper = mount(
        <UserContex.Provider value={{
            user
        }}>

            <HomeScreen />
        </UserContex.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
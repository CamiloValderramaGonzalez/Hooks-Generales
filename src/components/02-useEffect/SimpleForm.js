import React, { useEffect, useState } from 'react'

import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

    useEffect(() => {
        console.log('Hey!!!');
    }, [])

    useEffect(() => {
        console.log('Cambio el Form');
    }, [formState])

    useEffect(() => {
        console.log('Cambio el email');
    }, [email])

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <>
            <h1>UseEffect</h1>
            <hr></hr>

            <div className="mb-3">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {name === 'Nombre' && <Message />}
        </>
    )
}

import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

import './effects.css'

export const FormWithCustomHook = () => {

    const [formState, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formState;

    useEffect(() => {
        console.log('Cambio el email');
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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
            <div className="mb-3">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button
                type='submit'
                className='btn btn-primary'            >
                Guardar
            </button>
        </form>
    )
}

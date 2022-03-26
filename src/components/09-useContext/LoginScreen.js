import React, { useContext, useState } from 'react'
import { UserContex } from './UserContext'

export const LoginScreen = () => {

    const { user, setUser } = useContext(UserContex);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleEmail = ({ target }) => {
        setEmail(target.value);
    }

    const handleName = ({ target }) => {
        setName(target.value);
    }

    return (
        <div>
            <h1> LoginScreen</h1>
            <hr />
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={name}
                    onChange={handleName}
                />
            </div>
            <div className="input-group mb-3">
                <input type="text"
                    className="form-control"
                    placeholder="email"
                    aria-label="email"
                    aria-describedby="basic-addon2"
                    value={email}
                    onChange={handleEmail}
                />
                <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>
            <button
                className='btn btn-primary'
                onClick={() => {
                    setUser({
                        name: name,
                        email: email
                    })
                }}
            >
                Guardar
            </button>
        </div>
    )
}

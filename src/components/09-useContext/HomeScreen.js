import React, { useContext } from 'react'
import { UserContex } from './UserContext'

export const HomeScreen = () => {

    const { user, setUser } = useContext(UserContex);

    return (
        <div>
            <h1> HomeScreen</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 4)}
            </pre>
        </div>
    )
}

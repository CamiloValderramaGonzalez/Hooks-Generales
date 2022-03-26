import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContex } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({})
    return (
        <UserContex.Provider value={{ user, setUser }}>
            <AppRouter />
        </UserContex.Provider>
    )
}

import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { NavBar } from "./NavBar";

import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className='container mt-4'>
                <Routes >
                    <Route path="/">
                        <Route index element={<HomeScreen />} />
                        <Route path="about" element={<AboutScreen />} />
                        <Route path="login" element={<LoginScreen />} />
                        <Route path="*" element={<HomeScreen />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

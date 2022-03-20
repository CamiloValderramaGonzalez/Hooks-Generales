import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

import '../02-useEffect/effects.css';

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback((num) => {
        setValor(c => c + num)
    }, [setValor])

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            <div className='container'>
                <div className="row justify-content-md-left">
                    {
                        numeros.map(n => (
                            <div className="col col-1">
                                <Hijo

                                    key={n}
                                    numero={n}
                                    incrementar={incrementar}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* <Hijo /> */}
        </div>
    )
}

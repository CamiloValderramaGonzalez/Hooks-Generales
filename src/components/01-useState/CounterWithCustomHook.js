import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(0);

    return (
        <>
            <h1>Counter: {counter}</h1>

            <button
                className='btn btn-primary'
                onClick={increment}>
                +1
            </button>

            <button
                className='btn btn-danger'
                onClick={decrement}>
                -1
            </button>

            <button
                className='btn btn-secondary'
                onClick={reset}>
                reset
            </button>
        </>
    )
}

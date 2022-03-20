import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './layaout.css'

export const Layout = () => {

    const [boxSize, setboxSize] = useState();
    const { counter, increment } = useCounter(1);
    const pRef = useRef();

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { author, quote } = !!data && data[0];

    useLayoutEffect(() => {
        setboxSize(pRef.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
            <>
                <figure className="text-end">
                    <blockquote className="blockquote">
                        <p ref={pRef}
                        >{quote}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        {author}
                    </figcaption>
                </figure>
                <pre>{JSON.stringify(boxSize, null, 3)}</pre>
                <button
                    className='btn btn-primary'
                    onClick={increment}>
                    Siguiente
                </button>
            </>
        </div >
    )
}

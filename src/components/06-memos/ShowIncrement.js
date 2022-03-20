import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('me llamaron');

    return (
        <button
            className='btn btn-primary'
            onClick={() => {
                increment(5);
            }}
        >
            increment
        </button>
    )
})
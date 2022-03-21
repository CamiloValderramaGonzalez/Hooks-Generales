import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <li
            key={todo.id}
            className='list-group-item'
        >
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <p
                            className={`m-2  ${todo.done && 'complete'}`}
                            onClick={() => handleToggle(todo.id)}
                        >
                            {index + 1}. {todo.descripcion}
                        </p>
                    </div>
                    <div className='col col-2'>
                        <button
                            className='btn btn-primary'
                            onClick={() => handleDelete(todo.id)}
                        >
                            Borrar
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

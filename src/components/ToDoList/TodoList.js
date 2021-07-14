import React from 'react';

const todoList =(props)=>{
    return(
        <div>
            <span>{props.content}</span>
            <button className='updateBtn' onClick={props.click}>delete</button>
            <button className='updateBtn' onClick={props.edit}>edit</button>
            <hr />
        </div>
    )
}

export default todoList
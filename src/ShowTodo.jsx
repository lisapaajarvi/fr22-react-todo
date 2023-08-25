/* eslint-disable react/prop-types */
// import React from 'react';

function ShowTodo(props) {

   // console.log(props);

    return (
        <div onClick={() => props.removeTodo(props.id)}>
            {props.todo}
        </div>
    );
}

export default ShowTodo;
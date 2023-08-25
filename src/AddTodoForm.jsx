/* eslint-disable react/prop-types */
import {useState} from 'react';

function AddTodoForm(props) {

    const [inputNewTodo, setInputNewTodo] = useState("");

    // Alternativ till att skriva lambda direkt i input fältet!
    // onChange={(e) => setInputNewTodo(e.target.value)}
    const handleChange = (e) => {
        setInputNewTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("formulär sparat");
        props.updateTodos(inputNewTodo);
        setInputNewTodo("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Vad ska du göra?</h2>
                <input type="text" value={inputNewTodo} onChange={handleChange}/>
                <button type="submit">Spara</button>
            </form>
        </div>
    );
}

export default AddTodoForm;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import doubleTic from '../../assets/images/double-tick.png';
import notes from '../../assets/images/notes.png';
import { added, allCompleted, clearCompleted } from '../../redux/todos/actions';
import addTodos from '../../redux/todos/thunk/addTodos';

const Header = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleInput = (e) =>{
        setInput(e.target.value);
        console.log(input);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTodos(input));
        setInput("");
    }

    const completeHandler = () =>{
        dispatch(allCompleted());
    }

    const clearHandler = () =>{
        dispatch(clearCompleted());
    }
    return (
        <div>
        <form
            className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            type='submit'
            onSubmit={handleSubmit}
        >
            <img
                src={notes}
                className="w-6 h-6"
                alt="Add todo"
            />
            <input
                type="text"
                placeholder="Type your todo"
                className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                value={input}
                onChange={handleInput}
            />
            <button
                type="submit" 
               
                className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
            ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
            <li onClick={completeHandler} className="flex space-x-1 cursor-pointer">
                <img
                    className="w-4 h-4"
                    src={doubleTic}
                    alt="Complete"
                />
                <span>Complete All Tasks</span>
            </li>
            <li onClick={clearHandler} className="cursor-pointer">Clear completed</li>
        </ul>
    </div>
    );
};

export default Header;
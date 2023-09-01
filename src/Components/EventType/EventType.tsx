import React, { useState } from 'react';

const EventType = () => {
    const [user, setUser] = useState('');
    const [click, setClick] = useState('');

    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    }

    const handleButtonClick = () => {
        setClick('Button clicked!');
    }

    return (
        <div>
            <input 
                type='text'
                placeholder='Enter Name' 
                value={user}
                onChange={handleUserChange}
            />
            <p>{user}</p>
            <button onClick={handleButtonClick}>Click Btn</button>
            <p>{click}</p>
        </div>
    );
};

export default EventType;

import React from 'react';
import Link from 'react-router';
import Button from './Button.js';

// We can either create a React Component here or
const Home = (props) => {
    return (
        <div>
            <h1>Welcome to The Night Of Fanpage</h1>

            <Link to="/results">
                <Button className="intro-btn btn btn-primary" btnCopy="Check Out Top 10 Threads" onClick={console.log('foobar')} />
            </Link>
        </div>
    )
}

export default Home;

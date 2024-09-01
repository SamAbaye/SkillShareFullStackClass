import React from "react";
import { useState } from 'react';
import Footer from './Footer'
const  Main = () => {
    const [name, setName] = useState('Company Name')
    const handleClick = (name) => {
        setName(name)
    }

       return (
        <div className="main vh-100  d-flex justify-content-center align-items-center flex-column">
            <h2>{name}</h2>
            <p className="col-md-8 text-center">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>
                <button className="btn bg-light border-1 border-primary text-primary rounded-3" onClick={() => handleClick('Gojo Digital Agency')}>Click Here</button>
            </p>
        </div>
       
       )
}
export default Main;
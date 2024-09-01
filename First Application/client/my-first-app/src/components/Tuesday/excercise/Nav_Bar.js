import React from 'react'
const Nav_Bar = () => {

    return (
        <header>
        <nav className="nav d-flex justify-content-between border-bottom border-1 border-dark" >
            <ul className="nav-items list-unstyled d-flex mt-1">
                    <li className='m-2'><strong className=''>Brand Name</strong></li>
                    <li className='m-2'>Home</li>
                    <li className='m-2'>Feautures</li>
                    <li className='m-2'>Pricing</li>
                    <li className='m-2'>About</li>  
            </ul> 
            <div className="search-bar mt-2">
                <input className='bg-dark border-1 border-dark rounded-1 p-1 text-light' type="text" placeholder="Search..." />
                <button className="m-1 bg-light rounded p-1" type="submit" >Search</button> 
            </div>
        </nav>
        </header>
    )
}
export default Nav_Bar
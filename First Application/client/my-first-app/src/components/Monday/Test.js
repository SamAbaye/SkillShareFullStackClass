import React from 'react';

function Test() {
    
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'> 
        <div className='bg-light h-75 w-85 align-content-center text-center '>
            <h1 className='bold'> Jumbotron with icon </h1> 
            <p className='col-md-8 mx-auto'>This is a custom jumbotron featuring an SVG image at the top, 
                some longer text that wraps early thanks to a responsive .col-* class, and a customized call to action.</p>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary me-2">Call to action</button>
                <button type="button" className="btn btn-outline-secondary ">Secondary link</button>
            </div>
        </div>
        </div>
        
    )
}

export default Test;
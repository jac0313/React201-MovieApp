import React from 'react';
import { Link } from 'react-router-dom'


const Footer = () =>{
    
    return(
        <>
            <footer className="bg-dark p-3">
                <div className='mx-auto' style={{width: "20rem"}}>
                    <div className='d-flex justify-content-between fs-5'>
                        <Link to="/" className='text-white text-decoration-none'>Home</Link>
                        <h4 className='text-white text-center'>Movie Browser</h4>
                        <Link to="/about" className='text-white text-decoration-none'>About</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
    
export default Footer
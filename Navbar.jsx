import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
  return (
    <>
    
    <div className='navbar'>
        <div className='topleft'>
            <h1 className='heading'>Learny</h1>
        </div>
        <div className='topcentre'>
            <ul className='toplist'>
                <li className='toplistitem'>Courses</li>
                <li className='toplistitem'>Category</li>
                <li className='toplistitem'>Blog</li>
                <li className='toplistitem'>Contact</li>
                <li className='toplistitem'>About us</li>
                                

            </ul>
        </div>
        <div className='topright'>
            <button className='adminlogin'><Link to='/login'>Admin Login</Link></button>
            <button className='getstarted'>Get Started</button>
        </div>

    </div>
    <div className='learn'>
    <i className="learnicon fa-regular fa-star"></i>
    <span className='write'>Learn anything, anywhere, anytime</span>
    &nbsp;
    &nbsp;
    &nbsp;
    <i className="learnicon fa-regular fa-star"></i>
    <span className='write'>Learn anything, anywhere, anytime</span>
    &nbsp;
    &nbsp;
    &nbsp;
    <i className="learnicon fa-regular fa-star"></i>
    <span className='write'>Learn anything, anywhere, anytime</span>
    &nbsp;
    &nbsp;
    &nbsp;
    <i className="learnicon fa-regular fa-star"></i>
    <span className='write'>Learn anything, anywhere, anytime</span>
    &nbsp;
    &nbsp;
    &nbsp;
    <i className="learnicon fa-regular fa-star"></i>
    <span className='write'>Learn anything, anywhere, anytime</span>
    </div>
    </>
  )
}

import React from 'react'
import './wallpaper.css'

export default function Wallpaper() {
  return (
    <div className='wallpaper'>
        <div className='wallleft'>
            <h1 className='head'>Learn  anything  to <br></br>
                improve your skill
            </h1>
            <br></br>
            <br></br>
           
            <p className='para'>Learny  is  an  online  learning  site  that  provides  tons <br></br>of  thousands  of  classes  with  experienced  instructors</p>
            <button className='started'>Get Started</button>
            <button className='learnmore'>
            <i class="fa-solid fa-play"></i>&nbsp;Learn more</button>
        </div>
        <div className='wallright'>
            <img className='wallimg' src='./assests/laptop2.jpg' alt='sss'></img>

            
        </div>
    </div>
  )
}

import React from 'react';
import image from './cardPic.jpg'
export default function Card() {
    return (
        <div className='Outer-Card'>
            <div className='Card'>
                <div className='card-badge'>SOLD OUT</div>
                <img className='Sample' src={image} alt='' />
                <br></br>
                <span className='Stars'>5.0 ~USA</span>
                <p>This Product was designed by XYZ</p>
            </div>
            <div className='Card'>
                <img className='Sample' src={image} alt='' />
                <br></br>
                <span className='Stars'>5.0 ~USA</span>
                <p>This Product was designed by XYZ</p>
            </div>
            <div className='Card'>
                <img className='Sample' src={image} alt='' />
                <br></br>
                <span className='Stars'>5.0 ~USA</span>
                <p>This Product was designed by XYZ</p>
            </div>
            <div className='Card'>
                <div className='card-badge'>SOLD OUT</div>
                <img className='Sample' src={image} alt='' />
                <br></br>
                <span className='Stars'>5.0 ~USA</span>
                <p>This Product was designed by XYZ</p>
            </div>
        </div>
    )
}
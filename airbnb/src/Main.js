import React from 'react';
import image from './pic.jpg'
export default function Main(){
    return (
        <div>
            <div className='Collage'>
                <img src={image} alt='' />
            </div>
            <div className='Detail'>
                <h1 className='Heading'>Online Experience</h1>
                <p>Hello This is an Official site of AirBnb and we welcome you all.</p>
            </div>
        </div>
    )
}
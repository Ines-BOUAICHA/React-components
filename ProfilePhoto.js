import React  from 'react'
import Image from '../myimage.jpg'
import '../ProfilPhoto.css';


export default function ProfilPhoto() {
    return (
    <React.Fragment>
        <div className='center'>
            < img src ={Image} style={{width:'200px'}}/>
        </div>
    </React.Fragment>
    
        )
}
import React from 'react'
import './css/Course.css'
function Course({ course }) {
    const { id, tittle, decription, price, link, image } = course;

    return (
        <div className='course'>
            <div>
                <img src={image} width={220} height={180} />
                <h4 className='course-title'>{tittle}</h4>
                <h5 className='course-desc'>{decription}</h5>
                <h3 className='course-price'>{price} TL</h3>
                <a href={link} className='course-link'>Satın almak için</a>
            </div>
        </div>
    )
}

export default Course
import React from 'react'

export const GifGridItem = ({id, title,url}) => {
    
    return (
        <div className="card animate__animated animate__bounce animate__delay-2s">
            <img             
                src={url} 
                title={title}
            /> 
            <p>{title}</p>

        </div>
    )
}

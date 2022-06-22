import React from 'react'

const Symbol = ({ value, alt }) => {
    return (
        <span
            alt={alt}
            role="img"
            aria-label={alt ? alt : " "}
            aria-hidden={alt ? "false" : "true"}
        >
            {value}

        </span>
    )
}


export default Symbol

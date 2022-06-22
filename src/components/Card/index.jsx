import React, { useState } from 'react'
import Symbol from './Symbol'
import styles from './Card.module.css'


export default function Card({ flipped = false, value, id, alt, handleClick }) {

    function handleClickFn(id) {
        if (handleClick) {
            handleClick(id)
        }
    }
    return (
        <>
            <div className={!flipped ? styles.cardfront : styles.cardback}
                id={id}
                onClick={() => handleClickFn(id)}
            >
                {!flipped ? "?" : <Symbol value={value} alt={alt} />}
            </div>

        </>
    )
}

import React, { useState } from 'react'
import styles from './Card.module.css'


export default function Card({ flipped = false, back, id, handleClick }) {

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
                {!flipped ? "?" : back}
            </div>

        </>
    )
}

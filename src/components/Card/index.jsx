import React from 'react'
import styles from './Card.module.css'

export default function Card({ isOpen, cardFront, cardBack, onClick }) {

    return (
        <>
            {isOpen ? (
                <div className={styles.cardfront} onClick={onClick}>
                    {cardFront}
                </div>
            ) : (
                <div className={styles.cardback} >
                    {cardBack}
                </div>
            )}


        </>
    )
}

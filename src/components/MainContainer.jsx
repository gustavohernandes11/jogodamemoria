import React, { useState } from 'react'
import styles from '../styles/MainContainer.module.css'
import Card from './Card'
import initialCards  from '../utils/cards'

export default function App() {
    const [cards, setCards] = useState(initialCards)
    const [isGameRunning, setIsGameRunning] = useState(true)
    const [firstCardSelected, setFirstCardSelected] = useState(null)
    const [secondCardSelected, setSecondCardSelected] = useState(null)


    return (
        <>
            <div className={styles.maincontainer} id="table">
                {cards?.map((e, i) => <Card cardFront={e.value} isOpen={false} />)}
            </div>

        </>
    )
}

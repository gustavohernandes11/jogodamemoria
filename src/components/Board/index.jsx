import React, { useState, useRef } from 'react'
import { shuffleDuplicateSetRandomId } from '../../utils/deckFunctions'
import { initialCards } from '../../utils/cards'
import styles from './Board.module.css'
import Card from '../Card'

export default function App() {
    const [cards, setCards] = useState(() => shuffleDuplicateSetRandomId(initialCards))

    function handleClick(id) {
        const newCards = cards
        const newState = newCards?.map((card) => {
            if (card.id !== id) { return card }
            if (card.flipped) { return card }

            if (unflip && first.current && second.current) {
                if (first.current.value === second.current.value) {
                    first.current = null
                    second.current = null
                } else {
                    first.current.flipped = false
                    second.current.flipped = false
                    first.current = null
                    second.current = null
                }
                unflip.current = false
            }

            if (first.current && second.current) {
                unflip.current = true
            }


            if (card.id === id) {
                if (!first.current) {
                    first.current = card
                    card.flipped = true
                    return card
                } else if (!second.current) {
                    second.current = card
                    card.flipped = true
                    return card
                }
            }

        })
        setCards(() => newState)
    }

    const first = useRef(null)
    const second = useRef(null)
    const unflip = useRef(false)

    return (
        <div className={styles.board} id="table">
            {cards?.map((e, i) => <Card
                back={e.value}
                id={e.id}
                flipped={e.flipped}
                handleClick={handleClick}
                key={i}
            />)}
        </div>

    )
}

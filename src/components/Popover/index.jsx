import React from 'react'
import styles from './Popover.module.css'
import NewGameButton from './NewGameButton'

const Popover = ({ onClick, steps }) => {
    return (
        <div className={styles.popover}>
            <div className={styles.popoverBox}>
                <h1>Parabéns!</h1>
                <p>Você encontrou todas as cartas.</p>
                <p>Passos: {steps}</p>
                <NewGameButton onClick={onClick} value="Novo Jogo" />
            </div>
        </div>
    )
}

export default Popover
import React from 'react'
import styles from './Popover.module.css'

const NewGameButton = ({ onClick, value }) => {
    return (
        <button onClick={onClick} className={styles.newgamebutton}>
            {value}
        </button>
    )
}

export default NewGameButton;
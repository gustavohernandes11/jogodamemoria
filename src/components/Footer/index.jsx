import React from 'react'
import styles from './Footer.module.css'

function Footer({ onClick, primary }) {
    return (
        <footer className={styles.footer}>
            <button primary={primary} onClick={onClick}>Reiniciar</button>
        </footer>
    )
}

export default Footer
import React from 'react'
import styles from './Footer.module.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer({ onClick, primary }) {
    return (
        <footer className={styles.footer}>
            <a target="_blank" href="https://github.com/gustavohernandes11/memory-game">
                <FontAwesomeIcon icon={faGithub} />
                Ver no github
            </a>


            <button primary={primary} onClick={onClick}>Reiniciar</button>

        </footer>
    )
}

export default Footer
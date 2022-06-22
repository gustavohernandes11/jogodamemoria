import * as React from 'react'
import styles from './Header.module.css'

const Header = () => (
  <header className={styles.header}>
    <title>Jogo da Memória</title>
    <h1>Jogo da Memória</h1>
    <div className={styles.score}>
      <p>matches: 0</p>
      <p>Passos: 0</p>
    </div>
  </header>

)

export default Header

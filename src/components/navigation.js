import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <img src="https://static.wixstatic.com/media/b96ee2_f5b7770bc31140bd9dc3c3b0fe2f36bf~mv2.png/v1/fill/w_384,h_114,al_c,q_85,usm_0.66_1.00_0.01/Logo.webp" className={styles.navigationImg}></img>
    <ul className={styles.navigation}>
  

      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)

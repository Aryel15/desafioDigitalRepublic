import React from 'react'
import Logo from '../../assets/logo-dr.avif'
import styles from './menu.module.css'
import { IoMdInformationCircleOutline } from "react-icons/io";

const Menu = () => {
  return (
    <nav className={styles.nav}>
        <img src={Logo} className={styles.logo} alt="Logo Digital Republic" />
        <h1 className={styles.title}>Calcular Tinta</h1>
        <p className={styles.rules}><IoMdInformationCircleOutline /> Regras</p>
    </nav>  
  )
}

export default Menu
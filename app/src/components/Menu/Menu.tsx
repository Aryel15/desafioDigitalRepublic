import { useState } from 'react'
import Logo from '../../assets/logo-dr.avif'
import styles from './menu.module.css'
import { IoMdInformationCircleOutline } from "react-icons/io";
import ModalRules from '../ModalRules/ModalRules';

const Menu = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  return (
    <nav className={styles.nav}>
        <img src={Logo} className={styles.logo} alt="Logo Digital Republic" />
        <h1 className={styles.title}>Calcular Tinta</h1>
        <p className={styles.rules} onClick={() => setShowModal(!showModal)}>
          <IoMdInformationCircleOutline /> Regras
        </p>
        {showModal && <ModalRules/>}
    </nav>  
  )
}

export default Menu
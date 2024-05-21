import { messageErrors } from '../../utils/checkRules'
import styles from './modalrules.module.css'

const ModalRules = () => {
  return (
    <div className={styles.container}>
        <div className={styles.triangle_modal}></div>
        <ul className={styles.list_errors}>
            {
                messageErrors.map((message: string) => <li>{message}</li>)
            }
        </ul>
    </div>
  )
}

export default ModalRules
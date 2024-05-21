import { GoAlert } from "react-icons/go";
import styles from './alerterrors.module.css'

interface propsAlertErrors{
    quantity: number,
    errors: Array<string>
}

const AlertErrors = (props: propsAlertErrors) => {
    const { quantity, errors } = props
  return (
    <details>
        <summary className={styles.summary} title="Visualizar erros">
            <GoAlert />
            {`${quantity} ${quantity > 1 ? 'Erros' : 'Erro'}`}
        </summary>
        <ul className={styles.list_errors}>
            {errors.map((error) => <li>{error}</li>)}
        </ul>
    </details>
  )
}

export default AlertErrors
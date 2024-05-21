import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p >
            Feito por 
            <a href="https://aryelanne.netlify.app/" className={styles.footer_link}>
                Aryel Anne
            </a>
        </p>
    </footer>
  )
}

export default Footer
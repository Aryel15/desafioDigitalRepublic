import { useState } from 'react'
import Wall from './assets/walls.svg'
import styles from './App.module.css'
import Menu from './components/Menu/Menu'
import Form from './components/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <main>
        <section className={styles.container_wall}>
          <img src={Wall} alt="Parede laranja" className={styles.img_wall}/>
        </section>
        <Form/>
      </main>
      <footer>
        <p>Feito por <a href="/">Aryel Anne</a></p>
      </footer>
    </>
  )
}

export default App

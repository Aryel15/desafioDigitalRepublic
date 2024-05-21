import Wall from './assets/walls.svg'
import styles from './App.module.css'
import Menu from './components/Menu/Menu'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Menu/>
      <main>
        <section className={styles.container_wall}>
          <img src={Wall} alt="Parede laranja" className={styles.img_wall}/>
        </section>
        <Form/>
      </main>
      <Footer/>
    </>
  )
}

export default App

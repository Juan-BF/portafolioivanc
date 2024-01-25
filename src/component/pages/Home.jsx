
import styles from "../styles/Home.module.css"



const Home = () => {
  return (
    <>
      <div className={styles.boxHome}>
        <div className={styles.ImgPortada}></div>
        <section className={styles.Inf}>
          <div className={styles.infPersonal}>
            <h2><span>I</span>ván Acosta</h2>
            <span>Comunicador social | </span>
            <span>periodista profesional.</span>
          </div>
          <div className={styles.infcontenido}>
            <p>Hola, soy <span>I</span>ván Acosta, fotógrafo profesional, especializado en contar historias a través de imágenes. Descubre cómo puedo crear recuerdos hechos a tu medida.</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home

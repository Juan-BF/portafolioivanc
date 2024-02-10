import style from '../styles/Galeria.module.css'
import { bodasImages, graduacionesImages, libresImages } from '../../assets/imagenes/imagenes'

const Galeria = () => {



  return (
    <>
      <div className={style.BoxGaleria}>
        <section className={style.Bodas}>
          <h4>Para tus momentos mas especiales.</h4>
          <div className={style.catalogoB}>
            {bodasImages.map((imageName, index) => (
              <a key={index} href="#">
                <img key={index} src={imageName} alt={`imagenen ${index + 1}`} loading="lazy" />
              </a>
            ))}
          </div>
        </section>
        <section className={style.Graduaciones}>
          <h4>Para tus superaciones..</h4>
          <div className={style.catalogoG}>
            {graduacionesImages.map((imageNameg, index) => (
              <a key={index} href="#">
                <img key={index} src={imageNameg} alt={`imagenen ${index + 1}`} loading="lazy" />
              </a>
            ))}
          </div>
        </section>
        <section className={style.Libre}>
          <h4>Recuerdos que quedaran plasmado en un lienzo de pixeles.</h4>
          <div className={style.catalogoL}>
            {libresImages.map((imageName, index) => (
              <a key={index} href="#">
                <img key={index} src={imageName} alt={`imagenen ${index + 1}`} loading="lazy" />
              </a>
            ))}
          </div>
        </section>
        <div className={style.contact}>
          <h2>¡Qué dices! Listo para inmortalizar juntos esos momentos.</h2>
          <div className={style.socialMedia}>
            <a href="#"> </a>
            <a href="#"></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Galeria

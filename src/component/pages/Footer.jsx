import style from '../styles/Footer.module.css'


const Footer = () => {
  return (
    <>
      <footer className={style.BoxFoooter}>
        <div className={style.inf}>
          <h4>
            Página oficial de <span>I</span>van Acosta
          </h4>
          <p>© 2024, Ivan Acosta Productor Audio Visual</p>
        </div>
      </footer>
    </>
  )
}

export default Footer

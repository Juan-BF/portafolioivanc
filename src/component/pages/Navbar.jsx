import logo from '../../assets/imagenes/nav/logo.png';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <nav className={styles.boxNav}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={styles.name}>
                    <h1><span>I</span>van <br /> Acosta</h1>
                </div>
                <div className={styles.socialMedia}>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar

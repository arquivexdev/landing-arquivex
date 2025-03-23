import ModalCookie from '../../modal';
import styles from './styles.module.css';

const Header = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <header id='inicio' className={styles.container}>
            <div className={styles.wrapperImg}>
                <img width={150} src='arquivex.png' />
            </div>
            <div className={styles.wrapperLink}>
                <a href="#inicio" className={styles.link} onClick={scrollToTop} >Inicio</a>
                <a href="#Serviços" className={styles.link}>Serviços</a>
                <a href="#Nossas-Soluções" className={styles.link}>Nossas Soluções</a>
                <a href="#Quem-Somos" className={styles.link}>Quem Somos</a>
                <a href="https://painel.arquivex.com/#/login" target="_blank" className={styles.link}>Painel Arquivex</a>
            </div>

            

            {/* <ModalCookie /> */}
        </header>
    )
};

export default Header;
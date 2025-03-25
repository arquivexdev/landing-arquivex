import ModalCookie from '../../modal';
import styles from './styles.module.css';
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

const Header = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);


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

            <div className={styles.wrapper}>


                {isOpen && (
                    <ul className={styles.wrapperDropdown}>
                        <a href="#inicio" className={styles.link} onClick={scrollToTop} >Inicio</a>
                        <a href="#Serviços" className={styles.link}>Serviços</a>
                        <a href="#Nossas-Soluções" className={styles.link}>Nossas Soluções</a>
                        <a href="#Quem-Somos" className={styles.link}>Quem Somos</a>
                        <a href="https://painel.arquivex.com/#/login" target="_blank" className={styles.link}>Painel Arquivex</a>
                    </ul>
                )}
                <FiMenu className={styles.dropdrown} onClick={toggleDropdown} />

            </div>



        </header>
    )
};

export default Header;
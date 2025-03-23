import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import Cookies from "js-cookie";


const ModalCookie = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleModalAcept = () => {
        Cookies.set("cookieConsent", "true", { expires: 365 });
        setIsVisible(false);
    }

    const handleModalReject = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        const consent = Cookies.get("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
      }, []);
    

    return (
        isVisible && (
            <div className={styles.container}>
                <h2 style={{ margin: '0px' }}>Esse site usa cookies</h2>
                <p>Utilizamos cookies para aprimorar sua experiência de navegação, exibir anúncios ou conteúdo
                    personalizado e analisar nosso tráfego. Ao clicar em “Aceitar todos”, você concorda com nosso uso de
                    cookies.
                </p>
                <div className={styles.wrapperButton}>
                    <button className={styles.buttonRejeitar} onClick={handleModalReject} >Rejeitar</button>
                    <button className={styles.button} onClick={handleModalAcept}>Aceitar tudo</button>
                </div>
            </div>
        )

    )
};

export default ModalCookie;
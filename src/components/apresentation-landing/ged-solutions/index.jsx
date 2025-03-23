import Organizacao from './organizacao';
import GuardaDD from './guardaDD';
import GuardaDF from './guardaDF'
import Escaneamento from './escaneamento'
import styles from './styles.module.css';
import { useState } from "react";

const GedSolutions = () => {
    const [screen, setScreen] = useState("screen1");
    return (
        <div id='Serviços' className={styles.container}>

            <div className={styles.wrapperTitle}>
                <h1  className={styles.title}>
                    A solução GED, conta com módulos completos.
                </h1>

                <h3 className={styles.paragraph}>
                    Você pode escolher entre adquirir o sistema completo ou personalizar uma solução,
                    selecionando os módulos que melhor se adequam às suas necessidades.
                </h3>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.wrapperButton}> 
                    <button className={`${styles.button} ${screen === "screen1" ? styles.active : '' }`} onClick={() => setScreen("screen1")}>
                    Organização e Gestão de Documentos
                    </button>
                    <button  className={`${styles.button} ${screen === "screen2" ? styles.active : '' }`} onClick={() => setScreen("screen2")}>
                        Guarda de Documentos Digitais
                    </button>
                    <button className={`${styles.button} ${screen === "screen3" ? styles.active : '' }`} onClick={() => setScreen("screen3")}>
                    Guarda de Documentos Físicos
                    </button>
                    <button className={`${styles.button} ${screen === "screen4" ? styles.active : '' }`} onClick={() => setScreen("screen4")}>
                    Escaneamento e Visita
                    </button>
                </div>
                <div >
                    {screen === "screen1" && <Organizacao />}
                    {screen === "screen2" && <GuardaDD />}
                    {screen === "screen3" && <GuardaDF />}
                    {screen === "screen4" && <Escaneamento />}
                </div>
            </div>


        </div>
    )
};

export default GedSolutions;
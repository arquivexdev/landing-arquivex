import styles from './styles.module.css';


const GuardaDF = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperImgMain}>

            <img width={'100%'}src='guardaDF.png' style={{ borderRadius: '10px' }} />
            </div>

            <div className={styles.wrapperInfo}>
                <div  className={styles.wrapperText}>
                    <h1 className={styles.title}>Guarda de Documentos Físicos</h1>
                    <h3 className={styles.paragraph}>
                        A guarda de documentos físicos é essencial para manter o histórico e a conformidade de uma empresa.
                        Armazenamos com segurança seus registros físicos, garantindo acesso rápido quando necessário e proporcionando espaço e
                        organização em suas instalações. Confie-nos para preservar seus documentos importantes.
                    </h3>
                </div>

                <div className={styles.wraperCheck}>
                    <div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' className={styles.icon} />
                            <p className={styles.description}>Armazenamento Seguro</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' className={styles.icon} />
                            <p className={styles.description}>Preservação de Documentos</p>
                        </div>

                    </div>
                    <div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' className={styles.icon} />
                            <p className={styles.description}>Acesso Rápido e Controlado</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' className={styles.icon} />
                            <p className={styles.description}>Rastreabilidade Total</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default GuardaDF;
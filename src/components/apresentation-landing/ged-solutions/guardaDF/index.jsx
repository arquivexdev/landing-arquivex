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
                    <h3 style={{ fontSize: "16px", fontWeight: '500', maxWidth: "580px", color: '#0101018F' }}>
                        A guarda de documentos físicos é essencial para manter o histórico e a conformidade de uma empresa.
                        Armazenamos com segurança seus registros físicos, garantindo acesso rápido quando necessário e proporcionando espaço e
                        organização em suas instalações. Confie-nos para preservar seus documentos importantes.
                    </h3>
                </div>

                <div className={styles.wraperCheck}>
                    <div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Armazenamento Seguro</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Preservação de Documentos</p>
                        </div>

                    </div>
                    <div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Acesso Rápido e Controlado</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Rastreabilidade Total</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default GuardaDF;
import styles from './styles.module.css';



const Escaneamento = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperImgMain}>
                <img className={styles.img} width={'100%'} src='escaneamento.png' style={{ borderRadius: '10px' }} />
            </div>

            <div className={styles.wrapperInfo}>
                <div  className={styles.wrapperText}>
                    <h1 className={styles.title}>Escaneamento e Visita</h1>
                    <h3 className={styles.paragraph} >
                        Realize orçamentos e tenha nossa equipe preparada para digitalizar todo e qualquer documento retroativo da sua empresa, órgão público ou qualquer outra organização.
                        Contamos com os melhores equipamentos e oferecemos a máxima eficiência em digitalização e escaneamento de seus documentos. Além disso, proporcionamos acesso fácil
                        e prático na palma da sua mão, por meio de uma plataforma interativa semelhante às interfaces do Windows e do Mac, tornando o uso extremamente intuitivo e conveniente.
                    </h3>
                </div>

                <div className={styles.wraperCheck}>
                    <div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Fácil digitalização</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Rápida captura de imagens</p>
                        </div>

                    </div>
                    <div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Dentro das especificações legais</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Versátil e cheio de funcionalidades</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Escaneamento;
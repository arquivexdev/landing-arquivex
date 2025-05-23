import styles from './styles.module.css';


const GuardaDD = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperImgMain}>
                <img width={'100%'} src='guardaDD.png' style={{ borderRadius: '10px' }} />
            </div>

            <div className={styles.wrapperInfo}>
                <div  className={styles.wrapperText}>
                    <h1 className={styles.title}>Guarda de Documentos Digitais</h1>
                    <h3 className={styles.paragraph}>
                        A guarda de documentos digitais com certificado digital é a solução definitiva para uma gestão documental segura
                        e eficaz. Com uma plataforma interativa, semelhante às interfaces do Windows e do Mac, a usabilidade é extremamente
                        intuitiva e conveniente. Tecnologias avançadas, como OCR e indexação de pastas, permitem pesquisas rápidas e precisas,
                        facilitando o acesso às informações cruciais quando necessário. <br />
                        Além disso, o uso do certificado digital garante a autenticidade e a integridade dos documentos armazenados, tornando o processo ainda mais seguro e confiável. Simplifique sua gestão de documentos e melhore a eficiência com nossa solução de guarda de documentos digitais com certificado digital.
                    </h3>
                </div>

                <div className={styles.wraperCheck}>
                    <div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' className={styles.icon} />
                            <p className={styles.description}>Pesquisa Rápida e inteligente</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' className={styles.icon} />
                            <p className={styles.description}>Busca OCR por conteúdo</p>
                        </div>

                    </div>
                    <div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' className={styles.icon} />
                            <p className={styles.description}>Mais eficiência na pesquisa</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' className={styles.icon} />
                            <p className={styles.description}>Não perca tempo procurando</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default GuardaDD;
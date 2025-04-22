import styles from './styles.module.css'


const WhyChoose = () => {
    return (
        <div id='Quem-Somos' className={styles.container}>

            <div className={styles.wrapperTitle}>
                <h1 className={styles.title}>Por que escolher a Arquivex?</h1>

                <h2 className={styles.paragraph}>
                    Desde 2019, a Arquivex revoluciona a gestão documental, garantindo segurança, eficiência e conformidade legal.
                    Oferecemos digitalização e armazenamento em nuvem reconhecidos por órgãos públicos e empresas
                    privadas, proporcionando soluções inovadoras para otimizar o fluxo de informações
                </h2>
            </div>

            <div style={{ display: "flex", flexWrap: 'wrap', maxWidth: '900px', justifyContent: 'space-between', gap: 40, padding:'20px' }}>
                <div className={styles.wrapperCard}>
                    <div className={styles.wrapperImg}>
                        <img width={40} height={40} src="secure-shield.png" alt="" />
                    </div>

                    <div className={styles.wrapper}>
                        <h2 className={styles.titleCard}>Segurança</h2>
                        <h3 className={styles.paragraphCard}>Protegemos seus documentos físicos e digitais com total sigilo e protocolos avançados de segurança</h3>
                    </div>
                </div>

                <div className={styles.wrapperCard}>
                    <div className={styles.wrapperImg}>
                        <img width={40} height={40} src="learning.png" alt="" />
                    </div>

                    <div className={styles.wrapper}>
                        <h2 className={styles.titleCard}>Eficiência</h2>
                        <h3 className={styles.paragraphCard}>Capacitamos sua equipe para o uso e manutenção do sistema, garantindo um processo ágil e produtivo.</h3>
                    </div>
                </div>

                <div className={styles.wrapperCard}>
                    <div className={styles.wrapperImg}>
                        <img width={40} height={40} src="business.png" alt="" />
                    </div>

                    <div className={styles.wrapper}>
                        <h2 className={styles.titleCard}>Compromisso</h2>
                        <h3 className={styles.paragraphCard}>Contamos com uma equipe multidisciplinar de especialistas, sempre pronta para oferecer suporte e soluções personalizadas.</h3>
                    </div>
                </div>

                <div className={styles.wrapperCard}>
                    <div className={styles.wrapperImg}>
                        <img width={40} height={40} src="spyware.png" alt="" />
                    </div>

                    <div className={styles.wrapper}>
                        <h2 className={styles.titleCard}>Controle</h2>
                        <h3 className={styles.paragraphCard}>Nosso sistema proporciona monitoramento inteligente e auditoria completa para total transparência e rastreabilidade.</h3>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default WhyChoose;
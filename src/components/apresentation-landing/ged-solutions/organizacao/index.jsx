import styles from './styles.module.css';


const Organizacao = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperImgMain}> 
                <img className={styles.imgMain} width={'100%'}  src='organizacao.png' style={{ borderRadius: '10px' }} />
            </div>

            <div className={styles.wrapperInfo}>
                <div className={styles.wrapperText}>
                    <h1 className={styles.title}>Organização e Gesetão de Documentos</h1>
                    <h3 className={styles.paragraph}>
                        A organização e gestão de documentos são processos vitais para a eficiência operacional de empresas e organizações.
                        Isso engloba a classificação, armazenamento, acesso e administração sistemática de informações.
                        Inclui a padronização de nomenclaturas, a adoção de tecnologia para digitalização e o uso de sistemas de gerenciamento eletrônico
                        de documentos (GED) para armazenar informações de maneira segura e acessível.
                        Além disso, a segurança e privacidade dos documentos, bem como a definição de políticas de retenção adequadas, são considerações essenciais.
                        O acesso rápido e a recuperação eficaz de informações, juntamente com a conformidade legal e regulatória, são componentes-chave
                        dessa gestão.
                    </h3>
                </div>

                <div className={styles.wraperCheck}>
                    <div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Sistema 100% na nuvem</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Consulta de arquivo</p>
                        </div>

                    </div>
                    <div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Rastreabilidade</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='checkmark.png' width={30} height={30} />
                            <p style={{ color: '#033f73', fontSize: "20px", fontWeight: '600' }}>Geração de etiquetas</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Organizacao;
import styles from './styles.module.css';

const TechnologicalSolutions = () => {
    return (
        <div id='Nossas-Soluções' className={styles.container}>

            <h1 >Soluções Tecnológicas</h1>

            <div className={styles.card}>
                <div className={styles.wrapperText}>
                    <h2>OCR (Reconhecimenti Óptico de Caracteres)</h2>
                    <p>
                        O OCR, ou Reconhecimento Óptico de Caracteres, é uma tecnologia que desempenha um papel fundamental na
                        transformação digital de documentos.Ele permite a conversão de texto impresso ou manuscrito em formato
                        eletrônico, facilitando a busca, edição e armazenamento de informações.Essa tecnologia é amplamente
                        utilizada em empresas para digitalizar documentos físicos, tornando-os pesquisáveis e acessíveis de forma
                        eficiente, economizando tempo e recursos.
                    </p>
                </div>
                <img src="ocr.png" alt="OCR" width={'auto'} height={400} style={{ borderRadius: "100px 5px 5px 100px" }} />
            </div>
            <div className={styles.card}>
                <img src="assinatura.jpg" alt="OCR" width={285} height={400} style={{ borderRadius: "5px 100px 100px 5px" }} />
                <div className={styles.wrapperText}>
                    <h2>Assinatura Digital</h2>
                    <p>
                        A assinatura digital é uma técnica avançada que garante a autenticidade e integridade de documentos eletrônicos.
                        Ela envolve o uso de algoritmos criptográficos para criar uma representação única de uma assinatura, que é
                        vinculada ao conteúdo do documento.<br /> Essa assinatura não apenas confirma a identidade do signatário, mas também
                        garante que o documento não tenha sido alterado desde a assinatura. Isso é fundamental para transações seguras
                        e conformidade legal em ambientes digitais.
                    </p>
                </div>

            </div>
            <div className={styles.card}>
                <div className={styles.wrapperText}>
                    <h2>Controle e Auditoria de Dados e Quantidades no Sistema</h2>
                    <p>
                        O controle e a auditoria desempenham um papel crítico na gestão de sistemas, especialmente em cenários que
                        envolvem dados e quantidades. Por meio de rigorosos mecanismos de controle, as organizações podem garantir a
                        precisão e a confiabilidade de seus dados, minimizando erros e riscos operacionais.<br /> A auditoria, por sua vez,
                        permite a verificação independente e sistemática das atividades do sistema, rastreando todas as ações realizadas,
                        como a criação, modificação ou exclusão de dados. Isso é essencial para a detecção precoce de problemas,
                        o cumprimento de regulamentações e a garantia da integridade dos registros.
                    </p>
                </div>
                <img src="auditoria.png" alt="OCR" width={'auto'} height={400} style={{ borderRadius: "100px 5px 5px 100px" }} />
            </div>
        </div>
    )
};


export default TechnologicalSolutions;
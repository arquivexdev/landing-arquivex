import styles from './styles.module.css';


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperImg}>
                <img src='logo-White.png' width={150} />
            </div>
            <div className={styles.divider}></div>

            <div className={styles.wrapperContatos}>
                <div>
                    <h2 className={styles.paragraph}>Contatos</h2>
                    <p className={styles.paragraph}>+55 (38) 3522-1022</p>
                    <p className={styles.paragraph}>arquivex@arquivex.com</p>
                </div>

                <h2 className={styles.paragraph}>Endereço</h2>
                <p className={styles.paragraph}>Av. Pedro José Freire, 195 - A - Vila Guará<br /> Porteirinha - MG, 39520-000</p>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.wrapperLink}>
                <h2 className={styles.paragraph}>Redes Sociais</h2>
                <div className={styles.wrapperSocial}>
                    <img width={30} height={30} src="insta.png" alt="insta" />
                    <p className={styles.paragraph}>Instagram</p>
                </div>
                <div className={styles.wrapperSocial}>
                    <img width={30} height={30} src="whats.png" alt="whats" />
                    <p className={styles.paragraph}>WhatsApp</p>
                </div>
                <div className={styles.wrapperSocial}>
                    <img width={30} height={30} src="linkedin.png" alt="linkedin" />
                    <p className={styles.paragraph}>Linkedin</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;
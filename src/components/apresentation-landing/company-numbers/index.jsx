import styles from './styles.module.css';
import React from "react";
import CountUp from "react-countup";

const status = [
    { label: "Anos atuando no mercado de digitalização de documentos", value: 5, suffix: "+" },
    { label: "De documentos tratados através da nossa tecnologia", value: 1200, suffix: "mi" },
    { label: "Clientes espalhados por todo Brasil", value: 10, suffix: "+" },
    { label: "Estados sendo atendidos por nossa equipe", value: 200, suffix: "" },
];


const CompanyNumbers = () => {
    return (
        <div className={styles.container}>

            <div className={styles.divider}></div>

            <div className={styles.wrapperTitle}>
                <h1 className={styles.title}>Nossos números</h1>
                <h3 className={styles.paragraph}>Nossos números representam parte da nossa história</h3>
            </div>

           
                <div className={styles.wrapper}>
                    {status.map((stat, index) => (
                        <div key={index} className={styles.card}>
                            <h2 className={styles.number}>
                                <CountUp start={0} end={stat.value} duration={2} separator="," suffix={stat.suffix} />
                            </h2>
                            <p className={styles.description}>{stat.label}</p>
                        </div>
                    ))}
                </div>
           

            {/* <div className={styles.divider}></div> */}

        </div>
    )
};

export default CompanyNumbers;

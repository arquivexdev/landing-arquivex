import styles from './styles.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const image = [
    {src: "carousel1.png"},
    {src: "carousel2.png"},
    {src: "carousel3.png"},
]

const CompletePlataform = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        pauseOnHover: false

    };

    return (
        <div  className={styles.container}>
            <div className={styles.wrapperTitle}>
                <h1 className={styles.Title}>Uma solução completa para <strong>otimizar a gestão documental</strong></h1>
            </div>

            <div className={styles.wrapperParagraph}>
                <h3 className={styles.paragraph}><strong>Reduza até 37 horas de busca mensal, evite 83% de refações e libere 60% do espaço físico</strong> ao migrar para o armazenamento digital.</h3>
            </div>

            <div className={styles.carousel}>
                <Slider {...settings}>
                    {image.map((img, index) => (
                        <div  style={{ width: '100%', }} key={index}>
                            <img width={'100%'} height={595} src={img.src} alt={`Slide ${index + 1}`}  style={{ margin:'0', padding:'0', borderRadius:'0px 0px 20px 20px' }} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
};

export default CompletePlataform;
import styles from './styles.module.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    "public/logoCliente/camaraJana.png",
    "public/logoCliente/camaraPort.png",
    "public/logoCliente/camaraRiacho.png",
    "public/logoCliente/fabriciano.png",
    "public/logoCliente/franciscoSa.jpg",
    "public/logoCliente/janauba.png",
    "public/logoCliente/matiasCardoso.png",
    "public/logoCliente/odontoclinic.png",
    "public/logoCliente/port.jpg",
    "public/logoCliente/riacho.png",
    "public/logoCliente/serraGeral.png",
    "public/logoCliente/serranopolis.png",
    "public/logoCliente/verdelandia.png",

];

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: false
       
    };

    return (
        <div className={styles.container}>
            
                <h2 className={styles.title}>Já são mais de 100 clientes espalhados por todo Brasil</h2>
            

            <div className={styles.carousel} >
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div style={{paddingTop:'20'}} key={index}>
                            <img src={img} alt={`Slide ${index + 1}`} style={{ width: 160, borderRadius: "10px", marginRight:'10px' }} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;

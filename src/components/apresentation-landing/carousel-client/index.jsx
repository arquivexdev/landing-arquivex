import styles from './styles.module.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    // "public/logoCliente/camaraJana.png",
    "public/logoCliente/cam-port.png",
    "public/logoCliente/cam-riacho.png",
    "public/logoCliente/coronelFab.png",
    "public/logoCliente/franciscoSa.png",
    "public/logoCliente/janauba.png",
    // "public/logoCliente/matiasCardoso.png",
    "public/logoCliente/odontoclinic.png",
    "public/logoCliente/Pref-Porteirinha.png",
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
        pauseOnHover: false,
        responsive:[
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplaySpeed: 1500,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplaySpeed: 1500,
                    infinite: true,
                    dots: true
                }
            },
            
        ]
       
    };

    return (
        <div className={styles.container}>
            
                <h2 className={styles.title}>Já são mais de 100 clientes espalhados por todo Brasil</h2>
            

            <div className={styles.carousel} >
                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div style={{paddingTop:'20'}} key={index}>
                            <img className={styles.img} src={img} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Carousel;

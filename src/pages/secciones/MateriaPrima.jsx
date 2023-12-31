import React, { useState, useEffect, useRef } from 'react';
import { PageStyles } from '../../styles/Styles'

import { useSpring, animated } from 'react-spring';
import Header from '../../components/secciones/Header';
import HeroContainer from '../../components/secciones/HeroContainer';
import Footer from '../../components/secciones/Footer';
import Container2 from '../../components/secciones/Container2';


const containerData = [
    {
        inverseOrder: true,
        title: "Auto adheribles",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "termico.svg",
        icon2Text: "Térmico",
        icon3: "shrek.svg",
        icon3Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', },
            { id: 2, name: 'BOPP blanco', },
            { id: 3, name: 'Poliéster metalizado', },
            { id: 4, name: 'Poliéster blanco', },
            { id: 5, name: 'Vinil blanco', },
        ],
        backgroundImage: "/assets/materia-prima/cards/autoaderible.png",
    },
    {
        inverseOrder: false,
        title: "Envolventes",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "shrek.svg",
        icon2Text: "Tyvek",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/materia-prima/cards/envolvente.png",
    },
    {
        inverseOrder: true,
        title: "Manga Termoencogible",
        subtitle: "Disponible en papel",
        icon1: "none.svg",
        icon1Text: false,
        icon2: false,
        icon2Text: false,
        icon3: false,
        icon3Text: false,
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'BOPP transparente', description: 'Descripción del elemento 1' },
            { id: 2, name: 'BOPP blanco', description: 'Descripción del elemento 2' },
            { id: 3, name: 'Vinil blanco', description: 'Descripción del elemento 3' },
        ],
        backgroundImage: "/assets/materia-prima/cards/manga.png",
    },
    {
        inverseOrder: false,
        title: "Señalización y Boletaje",
        subtitle: "Disponible en papel",
        icon1: "bond.svg",
        icon1Text: "Bond",
        icon2: "termico.svg",
        icon2Text: "Térmico",
        listTitle: "En película",
        listItems: [
            { id: 1, name: 'No disponible', description: 'Descripción del elemento 1' },
        ],
        backgroundImage: "/assets/materia-prima/cards/letreros.png",
    },

]



const cardItems = [
    {
        title: "Fluorescente",
        desc: "Crea un efecto de color que al activarse con luz UV, lucen más fuertes y brillantes, realzando formas y detalles.",
        bg: "/assets/tintas/cards/1.webp",
        delay: 200,
        bgsz: "90%",
    },
    {
        title: "Invisible",
        desc: "Añade elementos de seguridad que solo pueden visualizarse bajo luz UV, perfecta para aplicaciones en textos, códigos y formas invisibles.",
        bg: "/assets/tintas/cards/2.webp",
        delay: 400,
        bgsz: "100%",
    },
    {
        title: "Inkjet",
        desc: "Da relieve a detalles finos y precisos con aplicaciones nítidas, creando una experiencia de textura en tu etiqueta.",
        bg: "/assets/tintas/cards/3.webp",
        delay: 600,
        bgsz: "190%",
    },
    {
        title: "Plateada",
        desc: "Agrega valor y aspecto premium con tintas plateadas, ideales para detalles sutiles en textos.",
        bg: "/assets/tintas/cards/4.webp",
        delay: 800,
        bgsz: "100%",
    },
    {
        title: "Termocromática",
        desc: "Incluye la característica que permite cambiar reversiblemente los colores en tu etiqueta con la temperatura.",
        bg: "/assets/tintas/cards/5.webp",
        delay: 1000,
        bgsz: "150%",
    },
    {
        title: "Aromática",
        desc: "Brinda una experiencia mulsisensorial con microcápsulas perfumadas que al rascarse desprenden olor.",
        bg: "/assets/tintas/cards/letreros.png",
        delay: 1200,
        bgsz: "190%",
    },
]


const containerMap = (data, index, theme) => {
    return (
        <>
            <Container2
                inverseOrder={data.inverseOrder}
                title={data.title}
                subtitle={data.subtitle}
                icon1={data.icon1}
                icon1Text={data.icon1Text}
                icon2={data.icon2}
                icon2Text={data.icon2Text}
                icon3={data.icon3}
                icon3Text={data.icon3Text}
                listTitle={data.listTitle}
                listItems={data.listItems}
                backgroundImage={data.backgroundImage}
                theme={theme}
            />
        </>
    );
};


const MateriaPrima = () => {


    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const fadeInAndSlideUp = useSpring({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
        delay: 300,
        config: { duration: 1000 },
    });    
    const container = containerData.map((elemento, index) => containerMap(elemento, index, "light"));
    const tabItems = [
        {
            ico: "/assets/svg/dot",
            text: "Materiales",
            route: "/servicios/materiales",
            top: "0",
        },
        {
            ico: "/assets/svg/dot",
            text: "ACABADOS BÁSICOS & PREMIUM",
            route: "/servicios/acabados",
            top: "0",
        },
        {
            //Materiales   ·      ·    
            ico: "/assets/svg/dot",
            text: "ASESORÍA INTEGRAL",
            route: "/servicios/asesoria-integral",
            top: "0",
        },
    ]

    return (
        <PageStyles theme={"light"}>
            <Header
                logo={"/assets/etimex_negro.svg"}
                theme={"light"}
            />
            <HeroContainer
                backgroundImage={"/assets/materia-prima/herov2.png"}
                text1={<>
                    <span className='strokeTex2'>Materiales</span>
                </>}
                text2={false}
                text3={"Innovación y alta calidad para cubrir a la perfección tus necesidades."}
                theme={"light"}
                theme2={"dark"}
                h1Only={true}
            />

            {container}

            <Footer theme={"light"} tabItems={tabItems} />

        </PageStyles>
    )
}

export default MateriaPrima

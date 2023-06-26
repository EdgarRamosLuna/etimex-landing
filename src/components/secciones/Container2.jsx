import React, { useState, useEffect, useRef } from 'react';
import { ContainerStyles } from '../../styles/Styles';
import { useSpring, animated } from 'react-spring';

const Icon = ({ src, alt, text, isVisible, theme }) => {
    const spin = useSpring({
        from: { transform: 'rotate(0deg)' }, // Comienza sin rotar
        to: { transform: 'rotate(360deg)' }, // Gira 360 grados
        delay: 300
    });
    const fade = useSpring({
        opacity: isVisible ? 1 : 0,
        delay: isVisible ? 500 : 0,
    });

    return (
        <animated.div style={fade} className='icon-text-container'>
            <div className='icon'>
                <img src={`/assets/svg/${theme === 'dark' ? src : `l-${src}`}`} alt={alt} />
            </div>
            <div className='text-icon'>
                <p>{text}</p>
            </div>
        </animated.div>
    );
};

const Container2 = ({ inverseOrder, title, subtitle, icon1, icon1Text, icon2, icon2Text, icon3, icon3Text, listTitle, listItems, backgroundImage, theme }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const containerStyle = inverseOrder ? 'container inverse' : 'container';

    // Animaciones
    const fade = useSpring({
        opacity: isVisible ? 1 : 0,
        delay: isVisible ? 500 : 0,
    });

    const scale = useSpring({
        transform: isVisible ? 'scale(1)' : 'scale(0)',
        delay: isVisible ? 500 : 0,
    });

    const slideInFromLeft = useSpring({
        transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
        delay: isVisible ? 500 : 0,
        opacity: isVisible ? 1 : 0,
    });

    const slideInFromBottom = useSpring({
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        delay: isVisible ? 500 : 0,
        opacity: isVisible ? 1 : 0,
    });
    const spinZoom = useSpring({
        from: { transform: isVisible ? "scale(0) rotate(0deg)" : "scale(1) rotate(360deg)" },
        to: { transform: "scale(1) rotate(360deg)" },
        delay: isVisible ? 500 : 0,
    });

    const backgroundFade = useSpring({
        opacity: isVisible ? 1 : 0,
        delay: 500,
        background: `url(${backgroundImage}) no-repeat center center`,
        backgroundSize: 'cover',
    });
    const shake = useSpring({
        to: [{ transform: 'translateX(-10px)' }, { transform: 'translateX(10px)' }, { transform: 'translateX(0)' }],
        from: { transform: 'translateX(0)' },
    });
    return (
        <animated.div ref={ref} style={{ height: '100%' }}>
            <ContainerStyles theme={theme}>

                <animated.div className={containerStyle}>
                    <animated.div className='block block-left'>
                        <animated.div className='block-text-container'>
                            <animated.div style={slideInFromBottom} className='txt-container'>
                                <animated.h2>{title}</animated.h2>
                                <animated.p style={slideInFromBottom}>{subtitle}:</animated.p>
                            </animated.div>
                            <animated.div className='icon-container'
                                style={
                                    {
                                        justifyContent: (icon1 && !icon2 && !icon3) ? 'start' : "space-evenly",
                                    }
                                }
                            >
                                {icon1 && <Icon src={icon1} alt='icon1' text={icon1Text} isVisible={isVisible} theme={theme} />}
                                {icon2 && <Icon src={icon2} alt='icon2' text={icon2Text} isVisible={isVisible} theme={theme} />}
                                {icon3 && <Icon src={icon3} alt='icon3' text={icon3Text} isVisible={isVisible} theme={theme} />}
                            </animated.div>
                            <animated.div className='list-container'>
                                <animated.p style={slideInFromLeft}>{listTitle}:</animated.p>
                                <animated.ul style={slideInFromBottom}>
                                    {listItems.map((item, index) => <li key={index}>{item.name}</li>)}
                                </animated.ul>

                            </animated.div>

                        </animated.div>
                    </animated.div>

                    <animated.div style={scale} className='image-container'>
                        <img src={backgroundImage} alt='' />
                    </animated.div>

                </animated.div>
            </ContainerStyles>
        </animated.div>
    );
};

export default Container2;
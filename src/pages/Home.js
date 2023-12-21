import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import Footer from './Footer';
import LogoBox from './LogoBox';
import Other from './other';
import Policy from './Policy';
import News from './News'
import Advocate from './Advocate';
import MarqueeBox from '../conponent/MarqueeBox';
import Banner from './Banner';
import ModalBackdrop from '../conponent/ModalBackdrop';
import NavigationBar from '../conponent/NavigationBar';
import HeaderBox from '../conponent/HeaderBox';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useLottie } from "lottie-react";
import LoadingAnimation from '../../static/loading.json'

const F2E1 = () => {
    const advocateRef = useRef(null);
    const newsRef = useRef(null);
    const policysRef = useRef(null);
    const otherRef = useRef(null);
    const [modalType, setModalType] = useState("default")
    const [newsModal, setNewsModal] = useState("none")
    const [bodyStyle, setBodyStyle] = useState("auto")
    const [viewStyle, setViewStyle] = useState("none")
    const [LoadingStyle, setLoadingStyle] = useState('flex')

    const options = {
        animationData: LoadingAnimation,
        loop: 1
    };

    const { View, play, totalFrames } = useLottie(options);

    const scrollToAnchor = (event) => {
        console.log("event", event)
        switch (event) {
            case "advocate":
                advocateRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
                break;
            case "news":
                newsRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
                break;
            case "policy":
                policysRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
                break;
            case "other":
                otherRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
                break;
        }
    };
    useEffect(() => {
        play();
        const stopAnimation = setTimeout(() => {
            setLoadingStyle("none")
            setViewStyle("block")
        }, 2000);

        return () => {
            clearTimeout(stopAnimation);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = bodyStyle;
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [newsModal]);

    useEffect(() => {
        if (viewStyle === 'block') {
            AOS.init();
            AOS.refresh();
        }
    }, [viewStyle]);

    return (
        <>
            <div className="Loading" style={{display : LoadingStyle}}>{View}</div>
            <div className="ViewContainer" style={{display: viewStyle}}>
                <HeaderBox scrollToAnchor={scrollToAnchor}></HeaderBox>
                <Banner></Banner>
                <MarqueeBox></MarqueeBox>
                <Advocate ref={advocateRef}></Advocate>
                <News ref={newsRef} setNewsModal={setNewsModal} setBodyStyle={setBodyStyle} setModalType={setModalType}></News>
                <Policy ref={policysRef} setNewsModal={setNewsModal} setBodyStyle={setBodyStyle} setModalType={setModalType}></Policy>
                <Other ref={otherRef} setNewsModal={setNewsModal} setBodyStyle={setBodyStyle} setModalType={setModalType}></Other>
                <LogoBox Type="Footer"></LogoBox>
                <Footer></Footer>
                <ModalBackdrop modalType={modalType} newsModal={newsModal} setNewsModal={setNewsModal} setBodyStyle={setBodyStyle}></ModalBackdrop>
                <NavigationBar scrollToAnchor={scrollToAnchor}></NavigationBar>
            </div>
        </>
    )
}

export default F2E1;
import './App.css';
import React, {useEffect, useState} from 'react';
import {Intro} from "./views/Intro";
import {Inside} from "./views/Inside";
import {PriceList} from "./views/PriceList";
import {GalleryWithPhotos} from "./views/GalleryWithPhotos";
import {Contact} from "./views/Contact";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./views/Header/Header";
import {Hamburger} from "./components/Hamburger/Hamburger";

function App() {

    const [showMenu, setShowMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setShowMenu(scrollY > lastScrollY);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [showMenu]);

    const handleHamburgerClick = () => {
        setShowMobileMenu(prev => !prev);
    }

    return (
        <>
            {window.innerWidth > 767 && showMenu && <Header onClick={()=>setShowMenu(false)} />}
            {window.innerWidth < 768 && (!showMobileMenu ? <Hamburger onClick={handleHamburgerClick}/> : <Header onClick={handleHamburgerClick} mobile/>)}
            <Intro/>
            <Inside/>
            <PriceList/>
            <GalleryWithPhotos/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;

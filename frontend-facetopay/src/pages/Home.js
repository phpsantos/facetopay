import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroPage from "../components/HeroPage";
import HeaderHeroPage from "../components/HeaderHeroPage";
import { useState } from 'react'

const Home = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Adicionando para usar efeitos do AOS em página
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const navigation = [
        { name: 'Contato', href: '/contact' },
        { name: 'Funcionalidades', href: '/features' },
        { name: 'Preços', href: '/pricing' },
        { name: 'Sobre Nós', href: '/about-us' },
        { name: '+1 Menu', href: '/novo-menu' }
    ]

    return (
        <div>
            <HeaderHeroPage
                navigation={navigation} 
                mobileMenuOpen={mobileMenuOpen} 
                setMobileMenuOpen={setMobileMenuOpen} />
            <HeroPage />
        </div>
    );
};

export default Home;

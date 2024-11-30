import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroPage from "../components/HeroPage";
import HeaderHeroPage from "../components/HeaderHeroPage";
import FeaturesLandingPage from "../components/FeaturesLandingPage";
import FeaturesListLandingPage from "../components/FeaturesListLandingPage";
import FormTypeFormLandingPage from "../components/FormTypeFormLandingPage";
import TopBarLandingPage from "../components/TopBarLandingPage";
import PricingLandingPage from "../components/PricingLandingPage";
import posthog from 'posthog-js'

import { useState } from 'react'

const Home = () => {

    posthog.capture('my event', { property: 'value' })

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
        <div className="min-h-screen">
            <TopBarLandingPage />
            <div className="mt-[56px]">
                <HeaderHeroPage
                    navigation={navigation}
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen} />
                <HeroPage />
                <FeaturesLandingPage />
                <FeaturesListLandingPage />
                <PricingLandingPage />
                <FormTypeFormLandingPage />
            </div>
        </div>
    );
};


export default Home;


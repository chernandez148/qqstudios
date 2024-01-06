import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Highlights from '../../components/Highlights/Highlights'
import mockDesigns from '../../assets/mock-designs.png'
import brandIdentityRed from '../../assets/brand-identity-red.png'
import brandIdentityBlue from '../../assets/brand-identity-blue.png'
import graphicDesignBlue from '../../assets/graphic-design-blue.png'
import graphicDesignRed from '../../assets/graphic-design-red.png'
import { IoIosArrowRoundForward } from "react-icons/io";
import './styles.css'

function Home() {
    const [altImage, setAltImage] = useState(false)
    const [fadeIn, setFadeIn] = useState(false)
    const [textShadow, setTextShadow] = useState({
        primaryX: 0,
        primaryY: 0,
        secondaryX: 0,
        secondaryY: 0
    })

    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true)
        }, 500);

        setTimeout(() => {
            setTextShadow({
                primaryX: -11,
                primaryY: -9,
                secondaryX: 8,
                secondaryY: 6
            })
        }, 1500);

    }, [])

    const highlights = [
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "graphic design blue",
            url: graphicDesignBlue,
            altName: "graphic design red",
            altUrl: graphicDesignRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        },
        {
            name: "brand identity blue",
            url: brandIdentityBlue,
            altName: "brand identity red",
            altUrl: brandIdentityRed
        }
    ]

    console.log(altImage)


    return (
        <div className='Home' style={{ opacity: fadeIn ? "1" : "0" }}>
            <Navbar />
            <section className='hero'>
                <div className='hero-left'>
                    <h3>OUR VISION</h3>
                    <div className='title-wrapper'>
                        <h1 style={{ textShadow: `${textShadow.primaryX}px ${textShadow.primaryY}px #35FFE4` }}>
                            CREATIVE <br />
                            DESIGNS
                        </h1>
                        <h1 style={{ textShadow: `${textShadow.secondaryX}px ${textShadow.secondaryY}px #FF2424` }}>
                            CREATIVE <br />
                            DESIGNS
                        </h1>
                    </div>
                    <p>
                        We are a digital marketing and website design agency. <br />
                        Based in Southern California, dedicated to <br />
                        turning your online aspirations into realities. <br />
                    </p>
                    <div className='hero-btn-wrapper'>
                        <button>Learn More <IoIosArrowRoundForward size={24} /></button>
                    </div>
                </div>
                <div className='hero-right'>
                    <img src={mockDesigns} alt='mock website template designs' width="100%" />
                </div>
            </section>
            <Highlights highlights={highlights} altImage={altImage} setAltImage={setAltImage} />
        </div>
    )
}

export default Home
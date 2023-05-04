import React from 'react'
import Header from './Header';
import About from './About';
import Posts from './Posts';
import Education from './Education';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
function Home() {
    return (
        <>
            <Navbar/>
            <Header />
            <About />
            <Posts />
            <Education />
            <Contact />
            <Footer/>
        </>
    )
}

export default Home
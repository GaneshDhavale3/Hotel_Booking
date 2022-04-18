import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Rooms = () => {
    return (
    <div>
        <Navbar/>
        <Hero hero="roomsHero">
        </Hero>
        <Banner title="Available Rooms" subtitle="Best in Class Room">
                <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Banner>
        <RoomsContainer/>
        <Footer/>
    </div>
    )
}

export default Rooms

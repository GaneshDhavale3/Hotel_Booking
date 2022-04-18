import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export class Booking extends Component {
    render() {
        return (
            <div>
                <Navbar/>
            <div style={{marginTop:"10%"}}>
                <h1>Booking Details</h1>
            </div>
            <Footer/>
            </div>
        );
    }
}


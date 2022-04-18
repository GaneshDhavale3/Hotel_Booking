import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Invoice from './Invoice';

export class Booking extends Component {
    render() {
        return (
            <div>
                <Navbar/>
            <div style={{marginTop:"10%"}}>
                <Invoice />
            </div>
            <Footer/>
            </div>
        );
    }
}


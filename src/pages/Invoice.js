import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthService from "../Service/auth.service";
import data from '../data';
import axios from 'axios';

class Invoice extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    printDocument() {

        const doc = new jsPDF();

        //get html
        const pdfTable = document.getElementById('divToPrint');

        //html to pdf format
        var html = htmlToPdfmake(pdfTable.innerHTML);

        const documentDefinition = { content: html };
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        pdfMake.createPdf(documentDefinition).open();

    }

     componentDidMount()
    { 
        let user = JSON.parse(localStorage.getItem('user'))
        let token = user.jwtToken
        const id = AuthService.getCurrentUser().userId;
        const url1 = `http://localhost:8019/user/${id}`;
       
        axios({
            method: 'GET',
            url: url1,
            withCredentials: false,
            headers: {
                "Authorization": "Bearer "+token,
            }
        })
        .then(res => {
            console.log(res.data)
        })
        
    }

    render() {
        return (
            <div className='back'>
                <Navbar/>
                <div style={{paddingTop:"3%"}}>

                </div>
            <div className="App container mt-5 " >
                <div id="divToPrint" className="m-3">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8 ">
                            <div className="opacity-25">
                                <div className="card">
                                    <header>
                                        <div style={{paddingTop:"10px"}}>
                                                <h3 align="center">Thank You For Booking</h3>
                                        </div>
                                        <div className="d-flex flex-row p-2">
                                            <div className="d-flex flex-column"> <span className="font-weight-bold">Booking Invoice</span> <small><strong>INV-001</strong></small> </div>
                                        </div>
                                    </header>
                                    <hr />
                                    <div className="table-responsive p-2">
                                        <table className="table table-borderless  mt-10">
                                            <tbody className="mt-10">
                                                <tr className="add">
                                                    <td><strong>Booking ID: </strong>ADM21JF027</td>
                                                    <td><strong>Check In: </strong>21/07/1997</td>
                                                    <td><strong>Check Out: </strong>21/07/2022</td>
                                                </tr>
                                                <tr className="content">
                                                    <td></td>
                                                    <td className="font-weight-bold">Cognizant Technology Solutions Pvt. Ltd - India<br /><strong>Email ID:</strong> ctspune@cognizant.com<br /><strong>Phone No.:</strong> 0123456789</td>
                                                    <td></td>
                                                    {/* <td className="font-weight-bold">Facebook <br /> Attn: Jassa Right Polymont <br /> USA</td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr />
                                    <div classNameName="products p-2">
                                        <table classNameName="table table-borderless">
                                            <tbody>
                                                <tr classNameName="add">
                                                    <td><strong>Room Type</strong></td>
                                                    <td><strong>No. of Guest</strong></td>
                                                    <td><strong>Price</strong></td>
                                                    <td classNameName="text-center"><strong>Total</strong></td>
                                                </tr>
                                                <tr className="content">
                                                    <td>Single Delux</td>
                                                    <td>1</td>
                                                    <td>&#8377; 1,500</td>
                                                    <td className="text-center">&#8377; 22,500</td>
                                                </tr>
                                                {/* <tr className="content">
                                                <td>Logo & Identity</td>
                                                <td>10</td>
                                                <td>$1,500</td>
                                                <td className="text-center">$15,000</td>
                                            </tr>
                                            <tr className="content">
                                                <td>Marketing Collateral</td>
                                                <td>3</td>
                                                <td>$1,500</td>
                                                <td className="text-center">$4,500</td>
                                            </tr> */}
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr />
                                    <div className="products p-2">
                                        <table className="table table-borderless">
                                            <tbody>
                                                <tr className="add">

                                                    <td><strong>Subtotal</strong></td>
                                                    <td><strong>GST(10%)</strong></td>
                                                    <td className="text-center"><strong>Grand Total</strong></td>
                                                </tr>
                                                <tr className="content">

                                                    <td>&#8377; 22,500</td>
                                                    <td>&#8377; 225</td>
                                                    <td className="text-center">&#8377; 22,225</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr />
                                    <div className="address p-2">
                                        <footer className="footer">
                                            <div className="container-fluid">
                                                <div className="row text-center">
                                                    <div className="col-12">©Traveller's Paradise</div>
                                                </div>
                                                <div className="row justify-content-center text-center">
                                                    <div className="col-12 col-md-2">
                                                        <p>T&C Apply.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </footer>
                                        {/* <table className="table table-borderless">
                                        <tbody>
                                            <tr className="add">
                                                <td></td>
                                            </tr>
                                            <tr className="content">
                                                <td> Bank Name : ADS BANK <br /> Swift Code : 00220022 <br /> Account Holder : Jassa Pepper <br /> Account Number : 6953PO789 <br /> </td>
                                            </tr>
                                        </tbody>
                                    </table> */}
                                        <div className="text-right">
                                            <button className="btn btn-primary " onClick={this.printDocument}><i className="fas fa-print">Print</i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        )
    };
}

export default Invoice;
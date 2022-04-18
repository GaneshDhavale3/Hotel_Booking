import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Invoice extends React.Component {

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

    render() {

        return (
            <div className='back'>
                <Navbar/>
                <div style={{paddingTop:"3%"}}>

                </div>
            <div className="App container mt-5 " >
                <div id="divToPrint" className="m-3">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8 ">
                            <div class="opacity-25">
                                <div class="card">
                                    <header>
                                        <div class="d-flex flex-row p-2">
                                            <div class="d-flex flex-column"> <span class="font-weight-bold">Booking Invoice</span> <small><strong>INV-001</strong></small> </div>
                                        </div>
                                    </header>
                                    <hr />
                                    <div class="table-responsive p-2">
                                        <table class="table table-borderless  mt-10">
                                            <tbody class="mt-10">
                                                <tr class="add">
                                                    <td><strong>Booking ID: </strong>ADM21JF027</td>
                                                    <td><strong>Check In: </strong>21/07/1997</td>
                                                    <td><strong>Check Out: </strong>21/07/2022</td>
                                                </tr>
                                                <tr class="content">
                                                    <td></td>
                                                    <td class="font-weight-bold">Cognizant Technology Solutions Pvt. Ltd - India<br /><strong>Email ID:</strong> ctspune@cognizant.com<br /><strong>Phone No.:</strong> 0123456789</td>
                                                    <td></td>
                                                    {/* <td class="font-weight-bold">Facebook <br /> Attn: Jassa Right Polymont <br /> USA</td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr />
                                    <div class="products p-2">
                                        <table class="table table-borderless">
                                            <tbody>
                                                <tr class="add">
                                                    <td><strong>Room Type</strong></td>
                                                    <td><strong>No. of Guest</strong></td>
                                                    <td><strong>Price</strong></td>
                                                    <td class="text-center"><strong>Total</strong></td>
                                                </tr>
                                                <tr class="content">
                                                    <td>Single Delux</td>
                                                    <td>1</td>
                                                    <td>&#8377; 1,500</td>
                                                    <td class="text-center">&#8377; 22,500</td>
                                                </tr>
                                                {/* <tr class="content">
                                                <td>Logo & Identity</td>
                                                <td>10</td>
                                                <td>$1,500</td>
                                                <td class="text-center">$15,000</td>
                                            </tr>
                                            <tr class="content">
                                                <td>Marketing Collateral</td>
                                                <td>3</td>
                                                <td>$1,500</td>
                                                <td class="text-center">$4,500</td>
                                            </tr> */}
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr />
                                    <div class="products p-2">
                                        <table class="table table-borderless">
                                            <tbody>
                                                <tr class="add">

                                                    <td><strong>Subtotal</strong></td>
                                                    <td><strong>GST(10%)</strong></td>
                                                    <td class="text-center"><strong>Grand Total</strong></td>
                                                </tr>
                                                <tr class="content">

                                                    <td>&#8377; 22,500</td>
                                                    <td>&#8377; 225</td>
                                                    <td class="text-center">&#8377; 22,225</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr />
                                    <div class="address p-2">
                                        <footer class="footer">
                                            <div class="container-fluid">
                                                <div class="row text-center">
                                                    <div class="col-12">© 2022 - SCAM-SPAM Ltd</div>
                                                </div>
                                                <div class="row justify-content-center text-center">
                                                    <div class="col-12 col-md-2">
                                                        <a href="/">T&C Apply.</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </footer>
                                        {/* <table class="table table-borderless">
                                        <tbody>
                                            <tr class="add">
                                                <td></td>
                                            </tr>
                                            <tr class="content">
                                                <td> Bank Name : ADS BANK <br /> Swift Code : 00220022 <br /> Account Holder : Jassa Pepper <br /> Account Number : 6953PO789 <br /> </td>
                                            </tr>
                                        </tbody>
                                    </table> */}
                                        <div class="text-right">
                                            <button class="btn btn-primary " onClick={this.printDocument}><i class="fas fa-print">Print</i></button>
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
import React, { Component } from 'react'
import Title from './Title'
import {FaHiking , FaShuttleVan} from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default class Services extends Component {
    state={
        services:[
         
            {   
                
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
                
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur"
            },
           

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service"> 
                                <span><Link to={"/preload"}>{item.icon}</Link></span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}
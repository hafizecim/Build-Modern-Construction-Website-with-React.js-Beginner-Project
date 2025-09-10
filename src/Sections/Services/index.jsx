import React from 'react';
import "./Services.css";
import { Link } from "react-scroll";
import { sketch } from '../../assets';
import { services } from '../../data';

const Services = () => {
  return (
    <section id='services'>
        <div className="overlay__div">
            <div className="container">
                <div className="grid">
                    <div className="section__header">
                        <h3 className="sub__heading">Plan Your Dream Project with Us</h3>
                        <p className="muted description">Ready to bring your vision to life? Our expert team offers
                            personalized consultations to guide you through every step—from
                            design to budget and beyond. Let’s lay the groundwork for your
                            next big project. Schedule your consultation today!</p>
                        <Link to="contact" className="btn primary">
                        Book Consultation
                        </Link>
                    </div>
                    <div className="object__contain">
                        <img src={sketch} alt="" />
                    </div>
                </div> {/* grid end */}
                <div className="grid services">
                    {
                        services.map((service, index) => (
                            <div className="service" key={index}>
                                <div className="flex top">
                                    <div className="flex__center icon">{service.icon}</div>
                                    <h4 className="title">{service.title}</h4>
                                </div>
                                <div className="middle">
                                    <p className="description">{service.description}</p>
                                </div>
                                <div className="flex bottom">
                                    <Link to="contact" className='btn'>Reach out</Link>
                                </div>
                            </div>
                        ))
                    }</div>
            </div>
        </div>
    </section>
  )
}

export default Services
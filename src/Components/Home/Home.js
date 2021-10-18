import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import banner1 from '../../image/banner/banner-one.png'
import banner2 from '../../image/banner/Crest-Whitening-Strips2.png'
import banner3 from '../../image/banner/file-20210107-24-ll42iu.webp'
import img from '../../image/event.png'

const Home = () => {
    const { services } = useService([])
    

    return (
        <div>
            <Carousel className="h-50">
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption >
                    <h3 className="banner-title fw-bold">WE PROVIDE TOTAL</h3>
                        <h3 className="banner-title fw-bold">Dental Care Solution</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3 className="banner-title fw-bold">WE PROVIDE TOTAL</h3>
                        <h3 className="banner-title fw-bold">Dental Care Solution</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                    <h3 className="banner-title fw-bold">WE PROVIDE TOTAL</h3>
                        <h3 className="banner-title fw-bold">Dental Care Solution</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="container mt-2">
                <h1 className="text-center m-4">Our <span className="text-Primary">Services</span> </h1>
                <div className="row">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>).slice(0, 6)
                    }
                </div>
            </div>
            <div className="container pb-2">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <h1>Upcoming Events</h1>
                    <div>
                        <img className="event img-fluid" src={img} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 mt-5 ">
                    <div className="pt-5 mt-5 ">
                        <h4>Notice</h4>
                        <hr />

                    </div>

                    <div className="pt-5 mt-5">
                        <h4>Admission Result FF cota</h4>
                        <hr />

                    </div>
                    <div className="pt-5 mt-5">
                        <h4>Admission Result</h4>
                        <hr />

                    </div>
                </div>
            </div>
            </div>
            

        </div>
    );
};

export default Home;
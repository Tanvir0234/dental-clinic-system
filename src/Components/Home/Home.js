import React from 'react';
import './Home.css';
import { Carousel } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import banner1 from '../../image/banner/Banner3.png'
import banner2 from '../../image/banner/Crest-Whitening-Strips2.png'
import banner3 from '../../image/banner/file-20210107-24-ll42iu.webp'
import oral1 from '../../image/oral-6.png'
import oral2 from '../../image/oral-4.png'
import oral3 from '../../image/oral-5.png'
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
            <div className="container mt-4 ">
                <h1 className="text-center ">OUR <span className="text-primary ">SPECIALITIES</span> </h1>
                <div className="row g-4 mt-4">
                    <div className="special col-lg-3 border shadow">
                        <div className="ms-5">
                        <img className="w-50 h-50 " src={oral1} alt="" />
                        <p className="fw-bold">Oral & Maxillofacial Sergery</p>
                        </div>
                        
                    </div>
                    <div className="special col-lg-3 border ms-auto shadow">
                        <div className="ms-5">
                        <img className="w-50 h-50" src={oral2} alt="" />
                        <p className="fw-bold">Orthodonthics</p>
                        </div>
                    
                    </div>
                    <div className="special col-lg-3 border ms-auto shadow">
                        <div className="ms-5">
                        <img className="w-50 h-50" src={oral3} alt="" />
                        <p className="fw-bold">Oral pathology</p>
                        </div>
                    
                    </div>





                </div>
            </div>











            <div className="container mt-2 ">
                <h1 className="text-center m-4">Our <span className="text-primary">Services</span> </h1>
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
                <div className="row mb-4">
                    <h1 className="mb-2">Upcoming <span className="text-primary">Events</span></h1>
                    <div className="col-lg-6 col-sm-12 mt-3 mb-3 pe-2 shadow rounded">

                        <div >
                            <img className="event img-fluid" src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12  ps-2 shadow rounded ">
                        <div className="p-3  ">
                            <h4>Notice</h4>
                            <hr />

                        </div>

                        <div className="p-3">
                            <h4>Admission Result FF cota</h4>
                            <hr />

                        </div>
                        <div className="p-3">
                            <h4>Admission Result</h4>
                            <hr />

                        </div>
                        <div className="p-3">
                            <h4>Patient List</h4>
                            <hr />
                        </div>
                        <div className="p-3">
                            <h4>Treatment Procedure</h4>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;
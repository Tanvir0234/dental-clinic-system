import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([])
    const [singleService,setSingleService] =useState({})
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    useEffect(()=>{
       const foundDetail = details.find(detail=>detail.id === serviceId);
       setSingleService(foundDetail);
    },[details])
    return (
        <div className="container">
            <div className="row g-4">
               <div className="col-lg-6 col-sm-12 mt-5">
                   <h2 className="mt-4">{singleService?.name}</h2>
                   <h6 className="my-3">{singleService?.description}</h6>
                   <h2>Treatment Fee : {singleService?.price}</h2>
                   <button className="btn btn-primary  mt-4 mb-3">Book The Service</button>
               </div>
               <div className="col-lg-6 col-sm-12 mt-5">
               <img src={singleService?.image} alt="" />
               </div>
            </div>

        </div>
    );
};

export default Details;
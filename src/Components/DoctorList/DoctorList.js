import React, { useEffect, useState } from 'react';

const DoctorList = () => {
    const [doctors,setDoctors] = useState([]);
     useEffect(()=>{
         fetch('/doctorsData.json')
         .then(res=>res.json())
         .then(data=>setDoctors(data))
     },[])
    return (
        <div className="container">
            <h1 className="text-center mb-4">Doctors</h1>
            <div className="row g-4">
                {doctors.map((doctor) => (
                    
                    <div  key={doctor.id} className="col-md-6 col-lg-4 col-sm-12">
                        
                        <div  className="card h-100">

                            <img src={doctor.image} className="align-img img-fluid rounded-start w-75 h-50" alt="..." />


                            <div className="card-body">
                                <h3 className="card-title text-center">{doctor.name}</h3>
                                <h4 className="text-center">{doctor.degree}</h4>
                                <h4 className="card-text text-center">  {doctor.specialist}</h4>
                            </div>

                            
                            
                            
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorList;
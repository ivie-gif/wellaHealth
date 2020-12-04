import React, {useState} from 'react'

import axios from 'axios';




export default function FormA({toggle}) {
    const iniState = {
        phoneNumber : '',
        pharmacyName: '',
        pharmacyAddress: ''
    }; 

const [state, setState] = useState (iniState);

const handleChange = (e) => {
    setState ({
        [e.target.name]: e.target.value
    });
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    axios.post("https://wellahealth-staging.azurewebsites.net/api/orders/bprequest/pharmacy",state)
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err)
    })
};

    return (
        
            <div className="order-1 order-md-2 col-12 col-md-6 forms">
            <h1>
                Check and record your blood pressure to get personalised advice to 
                avoid stroke and heart attack
            </h1>
            <h4>Also get discounts on medications at partner pharmacies nationwide
            </h4>
            {/* form */}
            <form className="form-group" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" className="form-control" name="phoneNumber" placeholder="Mobile Number" />
            <input onChange={handleChange} type="text" className="form-control" name="pharmacyName" placeholder="Pharmacy Name" />
            <input onChange={handleChange} type="text" className="form-control" name="pharmacyAddress" placeholder="Pharmacy Address" />
            <button type="Submit" className="btn btn-success">
                Get Started
            </button>
            </form>
            <h5 onClick={() => toggle('Form2')}>
                Click here if you already check your bp
            </h5>
            </div>
        
    )
}


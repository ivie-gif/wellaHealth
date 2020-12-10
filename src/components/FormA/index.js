import React, {useState} from 'react'

import axios from 'axios';




export default function FormA({toggle}) {
    const iniState = {
        phoneNumber : '',
        emailAddress: '',
        location: ''
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
            <h3>
                Check and record your blood pressure to get personalised advice to 
                avoid stroke and heart attack.
            </h3>
            <h6>Also get discounts on medications at partner <br/> pharmacies nationwide
            </h6>
            {/* form */}
            <form className="form-group" onSubmit={handleSubmit}>
            <input onChange={handleChange} type="tel" className="form-control" name="phoneNumber" placeholder="Mobile Number" required={true} />
            <input onChange={handleChange} type="email" className="form-control" name="emailAddress" placeholder="Email Address" required={true} />
            <input onChange={handleChange} type="text" className="form-control" name="location" placeholder="Location" required={true} />
            <button type="Submit" className="btn btn-success ">
                Get Started
            </button>
            </form>
            <h5 onClick={() => toggle('Form2')}>
                Click here if you already check your bp
            </h5>
            </div>
        
    )
}


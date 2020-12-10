import React from 'react'


export default function FormB ({toggle}) {

    return (

            <div className="order-1 order-md-2 col-12 col-md-6 forms">
                <h4>
                    Get personalized health information on all heart related condition.
                </h4>
                <h1>Enter your BP reading</h1>
                <h6>
                    Your blood pressure reading are contained in the paper given 
                    to you at the pharmacy
                </h6>

                <form className="form-group" >
                    <input type="text" className="form-control" name="pharmacy address" placeholder="Lower Number (Diastolic BP)" required={true} />
                    <input type="text" className="form-control" name="" placeholder="Top Number (symbolic BP)" required={true}  />
                    <button type="Submit" className="btn btn-success">
                     Record BP
                    </button>
                </form>

                <h5 onClick={() => toggle('Form1')}>
                    Click here if you would like to check your BP
                </h5>
            </div>
      
    )
}


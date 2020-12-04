import React from 'react'


export default function FormB ({toggle}) {
    return (

            <div className="order-1 order-md-2 col-12 col-md-6 forms">
                <h3>
                    Get personalized health information on all heart related condition.
                </h3>
                <h1>Enter your BP reading</h1>
                <h4>
                    Your blood pressure reading are contained in the paper given 
                    to you at the pharmacy
                </h4>

                <form className="form-group">
                    <input type="text" className="form-control" name="" placeholder="Top Number (symbolic BP)" />
                    <input type="text" className="form-control" name="pharmacy address" placeholder="Lower Number (Diastolic BP)" />
                    <button type="Submit" className="btn btn-success">
                     record BP
                    </button>
                </form>

                <h5>
                    Click here if you would like to check your BP
                </h5>
            </div>
      
    )
}


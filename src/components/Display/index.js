import React from 'react'
import Patient from '../../components/image/patient.svg'
import FormA from '../FormA/index';
import FormB from '../FormB/index'





class Display extends React.Component {
    state = {
        form: "Form1"
    };

toggle = (formtoggle) => {
    this.setState({
        ...this.state,
        form: formtoggle
    });
};


Forms = () => {
    let formShow;
    if (this.state.form === "Form1"){
        return (formShow = <FormA toggle={this.toggle} />);
    }else if (this.state.form === "Form2"){
        return (formShow = <FormB toggle={this.toggle} />) 
    }
}


render () {
    return (
        <main className="row wrapper">
            <div className="order-2 order-md-1 col-12 col-md-6 images">
              <img src={Patient} alt="patient" />    
            </div>
            {this.Forms()}
        </main>
    );
}
}

export default Display;


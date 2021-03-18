import { Divider } from 'antd';
import React, { Fragment, PureComponent } from 'react';
import { withRouter } from 'react-router';
import Textbox from '../Inputs/Textbox';

class AddressTemplate extends PureComponent {
    constructor(props){
        super(props);
        this.state ={}
    }


    render(){
        return(
            <Fragment>
                <Divider plain orientation="left"> Address </Divider>
                <div className="row">
                    <Textbox label="Address 1" modelName="address1"></Textbox>
                    <Textbox label="Address 2" modelName="address2"></Textbox>
                </div>
                

                <div className="row">
                    <Textbox label="City" modelName="city"></Textbox>
                    <Textbox label="State" modelName="state"></Textbox>
                </div>

                <div className="row">
                    <Textbox label="Country" modelName="country"></Textbox>
                    <Textbox label="Pincode" modelName="pincode"></Textbox>
                </div>

                <Divider plain orientation="left"> Contact </Divider>
                
                <div className="row">
                    <Textbox label="E-Mail" modelName="email" required="false"></Textbox>
                    <Textbox label="Phone" modelName="phone"></Textbox>
                </div>
                
            </Fragment>
        )
    }
}

export default withRouter(AddressTemplate);
import React, {  PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router';
import { MDBDataTable } from 'mdbreact';
import { seo } from '../helpers/default';
import { Doughnut, Bar } from 'react-chartjs-2';
import { getRequest } from '../helpers/apihelper';
import _ from 'lodash'

class Dashboard extends PureComponent {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
      seo({
          title: 'Dashboard',
          metaDescription: 'Dashboard'
        });
    }

    
    render(){
        return(
            <Fragment>
                 <h3 > Dashboard</h3>
            </Fragment>
        )
    }
}

export default withRouter(Dashboard);
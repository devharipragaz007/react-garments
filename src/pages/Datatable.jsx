import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
// import DataTable from '../components/Datatable/Datatable';

class Datatable extends PureComponent {


    render() {
        return <div className="table-scroll">
            {/* <DataTable data={this.dataSet} columns={this.columns} /> */}
        </div>
    }
}

export default withRouter(Datatable);
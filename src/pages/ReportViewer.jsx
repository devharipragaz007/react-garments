import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getRequest } from '../helpers/apihelper';


class Viewer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            iframe: function () {
                return {
                  __html: '<iframe id="report-designer-iframe" src="' + process.env.PUBLIC_URL + '/Stimulsoft/viewer/index.html" width="100%"></iframe>'
                }
              }
        }

    }

    getReportString = (report_name) => {
        getRequest('reports_designer/getReportString?report_name=' + report_name).then(data => {
            if(data.status === "info")
            {
                console.log(data.data[0])
                localStorage.setItem("report-details", JSON.stringify(data.data[0]))
            }
        })
    }

    componentDidMount = () => {
        console.log(this.props);
        this.getReportString(this.props.reportName)


        const USERDATA = this.props.store.login.userData
        var pass = this.props.pass;
        if(pass.includes("="))
        {
            pass += "&token=" + USERDATA.token
        }
        else
        {
            pass += "?token=" + USERDATA.token
        }
        localStorage.setItem("PASS", pass);
    }

    componentWillUnmount = () => {
        localStorage.removeItem("report-details")
    }


    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={ this.state.iframe() }  />
            </div>   
        );
    }

}
const mapStateToProps = (state) => {
    return {
        store: state
    }
}

const mapDispatchToProps = {
  }
  


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Viewer));
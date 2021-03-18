import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import  'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.less';
import {Animated} from "react-animated-css";
// import { connect } from 'react-redux'
// import './style/custom-antd.css'
import './style/theme.less'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {
  Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";

import api from './api.js'


import { Layout } from 'antd';

import Designer from './pages/ReportDesigner.jsx'
import Viewer from './pages/ReportViewer'

///// Components
///// Components
///// Components

import Topbar from './components/Topbar.jsx'
import Sidebar from './components/Sidebar';
import Footerbar from './components/Footerbar';

/// Pages
/// Pages
/// Pages
/// Pages

import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


/// Designation
import AddAddLess from './pages/masters/addless/add'
import ListAddLess from './pages/masters/addless/list'

import AddProductCategory from './pages/masters/product_category/add'
import ListProductCategory from './pages/masters/product_category/list'

import AddLedgerGroup from './pages/masters/ledger_group/add'
import ListLedgerGroup from './pages/masters/ledger_group/list'


import AddLedgerCategory from './pages/masters/ledger_category/add'
import ListLedgerCategory from './pages/masters/ledger_category/list'


const { Content } = Layout;
class App extends React.PureComponent
{
  constructor(props){
    super(props);
    this.state = {
      login : true
    }
  }

  componentDidMount = () => {
    localStorage.setItem("api", api)
  }

  render (){

    return (
          <Layout style={{ minHeight: '98vh' }}>
            { this.props.store.login.login ? 
              <Sidebar history={ this.props.history } />
          : null }
          <Layout className="site-layout" theme="dark">
            
          { this.props.store.login.login ? 
              <Topbar history={this.props.history} />
              : null }
            <Router history={this.props.history} >
              <Switch >
                <Route exact path="/report_designer">
                  <Designer />
                </Route>
                <Route exact path="/report_viewer">
                  <Viewer/>
                </Route>
                </Switch>
            <Content >
                    { this.props.store.login.login ? 
                    <div className="main-content">
                      <Animated animationIn="fadeInUp" animationOut="fadeInDown" animationInDuration={400} animationOutDuration={400} isVisible={true}>
                        <div className="main-container" >
                            <Switch >

                              <Route exact path="/" component={Dashboard} />


                              {/* AddLess Mas */}
                              <Route exact path="/masters/add_addless" component={AddAddLess} />
                              <Route exact path="/masters/edit_addless/:id" component={AddAddLess} />
                              <Route exact path="/masters/list_addless" component={ListAddLess} />



                              <Route exact path="/masters/add_product_category" component={AddProductCategory} />
                              <Route exact path="/masters/edit_product_category/:id" component={AddProductCategory} />
                              <Route exact path="/masters/list_product_category" component={ListProductCategory} />


                              <Route exact path="/masters/add_ledger_group" component={AddLedgerGroup} />
                              <Route exact path="/masters/edit_ledger_group/:id" component={AddLedgerGroup} />
                              <Route exact path="/masters/list_ledger_group" component={ListLedgerGroup} />



                              <Route exact path="/masters/add_ledger_category" component={AddLedgerCategory} />
                              <Route exact path="/masters/edit_ledger_category/:id" component={AddLedgerCategory} />
                              <Route exact path="/masters/list_ledger_category" component={ListLedgerCategory} />

                              <Redirect to="/" />
                            </Switch>
                        </div>
                        </Animated>
                      </div>
                    :
                        <Switch>
                          <Route exact path="/signup" component={Signup} />
                          <Route exact path="/" component={Login} />

                          <Redirect to="/" />
                        </Switch>
                    }
            </Content>
            
              {this.props.history.location.pathname !== null ? 
                  <Redirect to={this.props.history.location.pathname } />
              : null}
          </Router>
          {/* { this.props.store.login.login ? 
              <Footerbar /> : null } */}
          </Layout>
        </Layout>
    )
  }
}


const mapStateToProps = (state) => {
  return {
      store: state
  }
}


export default connect(mapStateToProps)(withRouter(App))
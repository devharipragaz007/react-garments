import React, { PureComponent, Fragment } from 'react';
import { Layout, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { toggleTheme } from '../actions/theme'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons'


const { Header } = Layout;

class Topbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      login: true,
      theme: "light"
    }
  }

  login = () => {
    this.setState({
      ...this.state,
      login: !this.state.login
    })
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  refreshPage = () => {
    this.props.history.go(0)
  };

  render() {
    const { toggleTheme } = this.props;
    return (
      <Fragment>
        <Header className="site-layout-background" style={{ color: 'white', backgroundColor: '#fff', padding: '0px' }} >
          <div className="row flex-nowrap">
            <div className="col-md-6">
              <h3 className="primary-text" style={{ marginTop: '10px' }}> <Button type="link" size="large" onClick={() => window.history.back()} icon={<ArrowLeftOutlined />} ></Button> ERP</h3>
            </div>
            <div className="col-md-6" align="right" style={{ right: '20px' }}>
              <Button type="link" onClick={() => this.props.history.go(0)} size="large" className="ant-btn-secondary" icon={<FontAwesomeIcon icon={faSync} size="4x" />} ></Button>
              {/* <Button shape="circle-outline" onClick={toggleTheme} className="ant-btn-secondary" size="large" icon={ <FontAwesomeIcon icon={ faMoon } /> } ></Button> */}
            </div>
          </div>
        </Header>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    store: state
  }
}


const mapDispatchToProps = {
  toggleTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
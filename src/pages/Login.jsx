import React, { PureComponent, Fragment } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { validateForm } from '../helpers/formhelpers';
import { successLogin } from '../actions/login'
import { connect } from 'react-redux';
import {  postRequestWithoutAuth } from '../helpers/apihelper';
import { withRouter } from 'react-router';
import { seo } from '../helpers/default';
import Textbox from '../components/Inputs/Textbox';

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 24,
    },
};


class Login extends PureComponent {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            buttonDisabled: true,
            buttonLoading: false,
            formData : {
                username : '',
                password : '',
                remember : true
            }
        }
        this.requiredFields = [
            'username',
            'password',
            'remember'
        ]
        this.forms = Form
    }

    navToSignup = () => {
        this.props.history.push('/signup')
    }

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    handleChange = (ev) => {
        console.log(ev)
    }

    
    componentDidMount = () => {
        seo({
            title: 'Login',
            metaDescription: 'Login'
          });
      }

    onFinish = values => {
        this.setState({
            ...this.state,
            buttonLoading : true
        },() => {
            postRequestWithoutAuth('user/login',values).then((data) => {
                if(data.status === "success")
                {
                    console.log(data.data)
                    this.props.successLogin(data.data);
                    // this.setState({
                    //     ...this.state,
                    //     buttonLoading : true
                    // })
                }
            })
            .catch(err => {
                // message.error(err);
                this.setState({
                    ...this.state,
                    buttonLoading : false
                })
            })
        })
        console.log(values);
    };

    validate = (changedValues,values) => {
        var t = validateForm(values,this.requiredFields);
        this.setState({
            ...this.state,
            buttonDisabled : !t
        })
    };

    onReset = () => {
        this.formRef.current.resetFields();
    };

    render(){
        return(
            <Fragment >
                <table className="login-bg">
                    <tbody>
                        <tr>
                        <td className="align-middle">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-3 login-container" align="middle">
                                    {/* <h3 onClick={() => this.navToSignup()}></h3> */}
                                    <Form
                                        {...layout}
                                        name="basic"
                                        initialValues={this.state.formData}
                                        onFinish={this.onFinish}
                                        onFinishFailed={this.onFinishFailed}
                                        onValuesChange={this.validate}
                                        >
                                            <div className="row">
                                                <Textbox modelName="username" label="Username" showLabel={false} className="col-md-12" ></Textbox>
                                            </div>

                                            <Form.Item
                                                name="password"
                                                rules={[
                                                {
                                                    required: this.requiredFields.includes('password'),
                                                    message: 'Please input your password!',
                                                },
                                                ]}
                                            >
                                                <Input.Password placeholder="Password" />
                                            </Form.Item>

                                            <div className="row">
                                                <Textbox modelName="cpin" label="CPIN" showLabel={false} className="col-md-12" ></Textbox>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <Form.Item name="remember" valuePropName="checked" rules={[
                                                        {
                                                            required: this.requiredFields.includes('remember'),
                                                            message: 'Please input your username!',
                                                        },
                                                        ]}>
                                                        <Checkbox>Remember me</Checkbox>
                                                    </Form.Item>
                                                </div>
                                            </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <Form.Item>
                                                    <Button type="primary" disabled={this.state.buttonDisabled} htmlType="submit" loading={this.state.buttonLoading}>
                                                    Submit
                                                    </Button>
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
}

const mapDispatchToProps = {
    successLogin
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
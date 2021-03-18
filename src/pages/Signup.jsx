import React, {
    PureComponent, Fragment
} from 'react';
import { Button } from 'antd';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { withRouter } from 'react-router';



class SignUp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    goToLogin = () => {

    }

    goToEmailSignUp = () => {
        this.props.history.push('/home')
    }

    responseFacebook = (response) => {
        console.log(response);
    }
      
    responseGoogle = (response) => {
        console.log(response);
    }

    errorByGoogle = (response) => {
        console.log(response);
    }

    facebookSignup = () => {
        console.log("response");
    }

    googleSignup = () => {
        console.log("response");
    }
      

    render(){
        return(
            <Fragment>
                <div className="row flex-nowrap">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center signup-container" align="center">
                        <h3>
                            The Boost for your unquenchable thirst for knowledge starts now. Let's do it!!!
                        </h3>
                        <br/>
                        <br/>
                        <h3>
                            We recommend using Facebook or Google+, so you can play against your friends when needed.
                        </h3>
                        <h3>
                            Don't worry, we'll never post anything without your permission!
                        </h3>
                        <br/>
                        <br/>
                        <GoogleLogin
                            clientId="806584642741-i6pdha6sn0ta9buupct072o9pvkrnuoe.apps.googleusercontent.com"
                            buttonText="Login With Google"
                            className="google-button"
                            onSuccess={this.responseGoogle}
                            onFailure={this.errorByGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        <br/>
                        <br/>
                        <FacebookLogin
                            appId="1088597931155576"
                            autoLoad={false}
                            fields="name,email,picture"
                            onClick={() => this.facebookSignup()}
                            callback={() => this.responseFacebook()} />
                        <br/>
                        <br/>
                        <Button className="ant-btn-primary" onClick={ () => this.goToEmailSignUp() } size="large" style={{  fontWeight : '600' }}> Sign Up With E-Mail </Button>

                    </div>
                    <div className="col-md-2"></div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(SignUp);
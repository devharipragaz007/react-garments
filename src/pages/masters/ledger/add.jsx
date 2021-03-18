import React, { PureComponent, Fragment } from 'react';
import { Form, Button, Divider  } from 'antd';
import { connect } from 'react-redux';
import { seo } from '../../../helpers/default';
import { getRequest, postRequest, putRequest } from '../../../helpers/apihelper';
import { withRouter } from 'react-router';
import moment from 'moment';
import Textbox from '../../../components/Inputs/Textbox';
import Selectbox from '../../../components/Inputs/Selectbox';
import Numberbox from '../../../components/Inputs/Numberbox';
import Address_Template from '../../../components/Templates/Address_Template';


let interval;

const calculateTypes = [
    {
        name : "Flat Amount",
        value : 'flat'
    },
    {
        name : "Percentage",
        value : 'percent'
    },
]

const types = [
    {
        name : "Add",
        value : 'add'
    },
    {
        name : "Less",
        value : 'less'
    },
]

const formulae = [
    {
        name : "IGST",
        value : 'igst'
    },
    {
        name : "SGST",
        value : 'sgst'
    },
    {
        name : "CGST",
        value : 'cgst'
    },
    {
        name : "Round Off",
        value : 'roundoff'
    },
    {
        name : "Discount",
        value : 'discount'
    }
]

class AddLedger extends PureComponent{
    formRef = React.createRef();
    constructor(props){
        super(props);
        this.tenant_id = this.props.match.params.tenant_id;
        this.state = {
            buttonDisabled : true,
            passwordMisMatched : false,
            formData : {
                status : 'active'
            },
            companiesList : []
        }
        this.id = this.props.match.params.id;
    }
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    validate = () => {
        if(this.formRef.current)
        {
            var values = this.formRef.current.getFieldValue();
            var errors = this.formRef.current.getFieldsError().filter(({ errors }) => errors.length).length;
            var passwordMisMatched = values.password === values.confirm_password
            this.setState({
                ...this.state,
                formData : values,
                buttonDisabled : Boolean(errors),
                passwordMisMatched : passwordMisMatched
            })
        }
    }

    getLedger = () => {
        console.log(this.id)
        if(this.id)
        {
            getRequest("masters/ledger?id=" + this.id).then(data => {
                data.data[0].dob = moment(data.data[0].dob)
                console.log(data.data[0])
                this.formRef.current.setFieldsValue(data.data[0]);
            })

        }
        else{
            this.formRef.current.setFieldsValue(this.state.formData);
            this.formRef.current.validateFields();
        }
    }

    componentDidMount() {
        this.getLedger();
        interval = setInterval(() => {
            this.validate()
        }, 100);
      }
    
      componentWillUnmount() {
        clearInterval(interval);
      }

    componentWillMount = () => {
        seo({
            title: 'Add Ledger',
            metaDescription: 'Add Ledger'
          });

          if(this.id)
          {
            seo({
                title: 'Edit Add Less',
                metaDescription: 'Edit Add Less'
              });
              console.log("Edit Page");
            }
    }

    onFinish = values => {
        this.setState({
            ...this.state,
            buttonLoading : true
        },() => {
            putRequest('masters/ledger?id=' + this.id, values).then(data => {
                if(data.status === "success")
                {
                    this.props.history.push('/masters/list_ledger')
                    console.log(data) 
                }
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    ...this.state,
                    buttonLoading : false
                })

            })
        })
    };

    


    render(){
        return(
            <Fragment>
                <div className="row">
                    <div className="col-md-12" align="right">
                        <Button type="default" htmlType="button" onClick={ () => { this.props.history.push('/masters/list_ledger') } }>
                            { this.id ? "Back" : 'List'}
                        </Button>
                    </div>
                </div>
                <br/>
                <Form
                    ref={this.formRef}
                    name="basic"
                    initialValues={this.state.formData}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    >
                        
                    <div className="row">
                        <Textbox label="Ledger Name" autoFocus modelName="ledger" className="col-md-4"></Textbox>
                        <Textbox label="Alias" modelName="alias" required="false" className="col-md-4"></Textbox>
                        <Selectbox modelName="ledger_group_id" label="Ledger Group" className="col-md-4" options={calculateTypes} value={this.state.formData.ledger_group_id}  ></Selectbox>
                    </div>

                    <div className="row">
                        <Selectbox modelName="ledger_category_id" label="Ledger Category" className="col-md-4" options={types} value={this.state.formData.ledger_category_id}  ></Selectbox>
                        <Numberbox label="O.Bal"  required="false" modelName="amount" className="col-md-4"></Numberbox>
                        <Selectbox modelName="status" label="Status" className="col-md-4" value={this.state.formData.status} statusSelect ></Selectbox>
                    </div>

                    <div className="row">
                        <Selectbox modelName="formula"  required="false"  label="Formula" options={formulae} value={this.state.formData.formula}  ></Selectbox>
                        <Textbox label="Price Group"  required="false" modelName="price_group"></Textbox>
                        {/* <Selectbox modelName="status" label="Status" value={this.state.formData.status} statusSelect ></Selectbox> */}
                    </div>

                    <div className="row">
                        {/* <Selectbox modelName="formula" label="Formula" options={formulae} value={this.state.formData.formula}  ></Selectbox> */}
                        <Textbox label="Admin Notes"  required="false" modelName="narration" className="col-md-12"></Textbox>
                        {/* <Selectbox modelName="status" label="Status" value={this.state.formData.status} statusSelect ></Selectbox> */}
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <Divider plain orientation="left" >Communications</Divider>
                            <div className="row">
                                <Textbox label="Address"  required="false" modelName="address" className="col-md-12"></Textbox>
                            </div>

                            <div className="row">
                                <Textbox required="false" label="Mail" modelName="email" type="email" ></Textbox>
                                <Textbox required="false" label="Phone" modelName="phone" ></Textbox>
                            </div>
                            <div className="row">
                                <Textbox label="Mobile" modelName="mobile"></Textbox>
                                <Selectbox modelName="state_id"  required="false"  label="State" options={formulae} value={this.state.formData.state_id}  ></Selectbox>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Divider plain orientation="left" >Statury Info</Divider>
                            <div className="row">
                                <Textbox required="false" label="GST No" modelName="gstno" ></Textbox>
                                <Textbox required="false" label="Credit Limit" modelName="credit_limit" ></Textbox>
                            </div>

                            <div className="row">
                                <Textbox required="false" className="col-md-4" label="Ledger" modelName="ledger" ></Textbox>
                                <Textbox required="false" className="col-md-4" label="Value" modelName="value" ></Textbox>
                                <Textbox required="false" className="col-md-4" label="Rule" modelName="rule" ></Textbox>
                            </div>


                            </div>
                        </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Form.Item>
                                <Button type="primary" disabled={ this.state.buttonDisabled }  htmlType="submit" loading={this.state.buttonLoading}>
                                { this.id ? "Update" : 'Submit'}
                                </Button>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
                
                {/* <div className="row"> 
                <div className="col-md-6">
                    <pre> { JSON.stringify(this.formRef, null, 2)  } </pre>
                </div>
                <div className="col-md-6">
                    <pre> { JSON.stringify(this.state.formData, null, 2)  } </pre>
                </div>

                </div> */}
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
    
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddLedger));
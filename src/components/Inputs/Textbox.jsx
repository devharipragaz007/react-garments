/* eslint-disable no-useless-escape */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { Form, Input } from 'antd'
import { checkBoolean, issetNotEmpty } from '../../helpers/formhelpers';

class TextBox extends PureComponent {
    constructor(props){
        super(props);
        this.state ={}
    }

    render(){
        const showLabel = issetNotEmpty(this.props.showLabel) ? this.props.showLabel : true;
        // console.log(this.props.value, issetNotEmpty(this.props.value))
        return(
            <Form.Item
                name={ this.props.modelName ? this.props.modelName : 'name' }
                className={ this.props.className ? this.props.className : 'col-md-6' }
                rules={[
                {
                    required: checkBoolean(this.props.required, true),
                    message: 'Please Input ' + this.props.label + '!' ,
                },
                {
                    pattern: this.props.preventSpecialCharacters ? new RegExp(/^[a-zA-Z_]+$/i) : new RegExp(/^[a-zA-Z0-9@~`!@#$%^&*()_=+\\\\'; :\"\\/?>.<,-]+$/i),
                    message: 'Special Characters are not allowed' ,
                },
                ]}
            >
                <Input autoFocus={ this.props.autoFocus } addonBefore={ showLabel ? this.props.label : ''} defaultValue={ this.props.defaultValue } disabled={ this.props.disabled } style={{ borderColor : issetNotEmpty(this.props.value) ? "black" : "blue" }}
                id={ this.props.id } maxLength={ this.props.maxLength } prefix={ this.props.prefix } size={ this.props.size } suffix={ this.props.suffix } type={ this.props.type } value={ this.props.value } onPressEnter={ this.props.onPressEnter } allowClear={ checkBoolean(this.props.allowClear) } bordered={ this.props.bordered } addonAfter={this.props.addonAfter} onChange={ this.props.onChange } onBlur={ this.props.onBlur } placeholder={ "Please Enter " + this.props.label }/>
            </Form.Item>
        )
    }
}

export default withRouter(TextBox);
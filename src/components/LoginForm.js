// import React library
import React, { Component } from 'react';
import ReactDom from 'react-dom';

// import components from AntDesign
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import 'antd/dist/antd.css';

// axios to make HTTP request
import axios from 'axios';

// Create Form Component
class Login extends Component {
  constructor(props) {
    super(props);
  }

  // Validate input and handle submit with axios post request
  handleSubmit = (e) => {
    e.preventDefault();

    // validate form with build in ant design validation
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const userCredentials = {
          email: values.email,
          password: values.password
        };
        console.log(userCredentials);

        // making post request with axios
        axios({
          method: 'post',
          url: 'http://localhost:3000/auth/login',
          data: userCredentials
        })
          .then(response => console.log('Success:', response))
          .catch(err => console.log('Error:', err));
      }
    });
  }

  // render login component
  render() {
    const { getFieldDecorator } = this.props.form;
    const formStyle = {

    }
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            },{
              required: true, message: 'Please input your email!'
            }],
          })(
            <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const LoginForm = Form.create()(Login);
export default LoginForm;

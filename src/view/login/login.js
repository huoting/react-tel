import React, { Component } from 'react';
import './login.scss'

import { GetToken, SetToken } from '../../utils/auth'
import { Form, Icon, Input, Button, message } from 'antd'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { /*装载*/
    if (GetToken()) return this.props.history.push('/')
    this.props.form.setFieldsValue({
      token: ''
    })
  }
  componentDidUpdate() { /*更新*/
  }
  componentWillUnmount() { /*卸载*/
  }

  handleSubmit = e => { // 登录
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const token = values.token
        SetToken(token)
        message.success('登录成功', 1)
        this.props.history.push('/')
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className="Login">
        <Form onSubmit={this.handleSubmit.bind(this)} className="from">
          <div className="title-from">夏日的风资质系统</div>
          <Form.Item>
            {getFieldDecorator('token', {
              rules: [{ required: true, message: '输入token!' }],
            })(
              <Input
                className="input"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="输入token"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('pwd', {
              rules: [{ required: true, message: '输入密码!' }],
            })(
              <Input
                className="input"
                type="password"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="输入密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="button">登录</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
export default Form.create()(Login);

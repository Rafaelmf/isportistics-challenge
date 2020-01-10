import React, { Component } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import './HeaderForm.css';

export default class HeaderForm extends Component {
  render() {
    return (
      <div className="container">
        <Form layout="inline">
          {/* <Form.Item label="Form Layout">
            <Radio.Group defaultValue="horizontal">
              <Radio.Button value="horizontal">
                Horizontal
              </Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </Form.Item> */}
          <Form.Item label="First Name">
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item label="Participação">
            <InputNumber
              defaultValue={100}
              min={0}
              max={100}
              formatter={value => `${value}%`}
              parser={value => value.replace('%', '')}
              // onChange={onChange}
              placeholder="Participation"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

import React from "react";
import { Form, Input, Checkbox, Button, Alert } from "antd";

const formItemLayout = {
  labelCol: {
    lg: { span: 4 }
  },
  wrapperCol: {
    lg: { span: 20 }
  }
};

const tailItemLayout = {
  wrapperCol: {
    lg: { span: 20, offset: 4 }
  }
};

export const ShopForm = props => {
  return (
    <Form {...formItemLayout}>
      <Form.Item label="Name" required={true} help="" validateStatus="">
        <Input />
      </Form.Item>
      <Form.Item label="Domain" required={true} help="" validateStatus="">
        <Input />
      </Form.Item>
      <Form.Item {...tailItemLayout}>
        <Checkbox checked>Activate</Checkbox>
      </Form.Item>
      <Form.Item {...tailItemLayout}>
        <Checkbox checked>Is send email</Checkbox>
      </Form.Item>
      <Form.Item {...tailItemLayout}>
        <Checkbox checked>Active in product price</Checkbox>
      </Form.Item>
      <Form.Item {...tailItemLayout}>
        <Checkbox>Exclude from email content</Checkbox>
      </Form.Item>
      <Form.Item {...tailItemLayout}>
        <Alert message="Error" type="error" showIcon closable />
      </Form.Item>
      <Form.Item {...tailItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            marginRight: 5
          }}
        >
          Save
        </Button>
        <Button style={{ marginRight: 5 }}>Save and add another</Button>
        <Button type="danger" style={{ float: "right" }} icon="delete">
          Delete
        </Button>
        <Button style={{ marginRight: 5 }}>Save and continue editing</Button>
      </Form.Item>
    </Form>
  );
};

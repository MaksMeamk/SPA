import React from 'react'
import { Button, Form, Input } from 'antd';

function Authorization() {
  const [form] = Form.useForm();

  const buttonItemLayout = null;
  return (
    <Form
    
      layout={'vertical'}
      form={form}
  
      style={{
        maxWidth: 'vertical' === 'inline' ? 'none' : 600,
      }}
    >
      <Form.Item label="Form Layout" name="layout">
       
      </Form.Item>
      <Form.Item label="Field A">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Field B">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  )
    
}

export default Authorization  
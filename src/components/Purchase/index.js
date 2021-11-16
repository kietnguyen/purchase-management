import { Button, DatePicker, Form, Input, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { dateFormat } from '../../utils/datetime';
import { Content } from '../common/styles';

const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Purchase = () => {
  return (
    <Content>
      <Title level={2}>Add/Edit Purchase</Title>
      <Form
        name='purchase'
        autoComplete='off'
        {...formItemLayout}
      >
        <Form.Item
          label='Product name'
          name='name'
          rules={[{ required: true, message: 'Please input Product name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Product price'
          name='price'
          rules={[{ required: true, message: 'Please input Product price' }]}
        >
          <Input prefix='$' type='number' min={0} />
        </Form.Item>

        <Form.Item
          label='Service cost'
          name=''
          rules={[{ required: true, message: 'Please input Service cost' }]}
        >
          <Input prefix='$' type='number' min={0} />
        </Form.Item>

        <Form.Item
          label='Purchased date'
          name='purchasedAt'
        >
          <DatePicker format={dateFormat} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <CenterContainer>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </CenterContainer>
        </Form.Item>
      </Form>
    </Content>
  );
};
export default Purchase;

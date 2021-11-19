import { Button, DatePicker, Form, Input, Typography } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { addPurchase } from '../../actions/purchases';
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
  const dispatch = useDispatch();

  const today = moment();
  const initialValues = { name: '', price: '', usageCost: '', purchasedDate: today };
  const [form] = Form.useForm();

  const [name, setName] = useState(initialValues.name);
  const [price, setPrice] = useState(initialValues.price);
  const [usageCost, setUsageCost] = useState(initialValues.usageCost);
  const [purchasedDate, setPurchasedDate] = useState(initialValues.purchasedDate);

  const onSubmit = () => {
    dispatch(addPurchase({
      id: uuid(),
      name,
      price: parseFloat(price),
      usageCost: parseFloat(usageCost),
      currentUses: 0,
      expectedUses: Math.ceil(price / usageCost),
      purchasedAt: moment(purchasedDate).format('X'),
    }));

    form.resetFields();
  };

  return (
    <Content>
      <Title level={2}>Add a new Purchase</Title>
      <Form
        form={form}
        name='purchase'
        autoComplete='off'
        initialValues={initialValues}
        onFinish={onSubmit}
        {...formItemLayout}
      >
        <Form.Item
          label='Product name'
          name='name'
          rules={[{ required: true, message: 'Please input Product name' }]}
        >
          <Input value={name}
                 onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label='Product price'
          name='price'
          rules={[{ required: true, message: 'Please input Product price' }]}
        >
          <Input prefix='$' type='number' min={0} step='0.01' value={price}
                 onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label='Usage cost'
          name='usageCost'
          rules={[{ required: true, message: 'Please input Usage cost' }]}
        >
          <Input prefix='$' type='number' min={0} step='0.01' value={usageCost}
                 onChange={(e) => setUsageCost(e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label='Purchased date'
          name='purchasedDate'
          value={purchasedDate}
        >
          <DatePicker
            format={dateFormat} style={{ width: '100%' }} value={purchasedDate}
            onChange={(date, dateString) => setPurchasedDate(dateString)}

          />
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

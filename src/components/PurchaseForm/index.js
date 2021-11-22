import { Button, DatePicker, Form, Input, Space, Typography } from 'antd';
import { isEmpty } from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { editPurchase } from '../../actions/purchase';
import { addPurchase, updatePurchase } from '../../actions/purchases';
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

const PurchaseForm = () => {
  const purchase = useSelector((state) => state.purchase);
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const initialValues = { id: uuid(), name: '', price: '', usageCost: '', purchasedDate: moment() };

  const [formTitle, setFormTitle] = useState('Add a new Purchase');
  const [formButton, setFormButton] = useState('Add');

  useEffect(() => {
    if (isEmpty(purchase)) {
      setFormTitle(`Add a new Purchase`);
      setFormButton(`Add`);
      form.resetFields();
    } else {
      setFormTitle(`Edit Purchase #${purchase.id}`);
      setFormButton(`Update`);
      form.setFieldsValue({ ...purchase, purchasedDate: moment.unix(purchase.purchasedAt) });
    }
  }, [purchase, form]);

  const onSubmit = () => {
    const formPurchase = form.getFieldsValue();
    const combinedPurchase = {
      id: purchase.id || uuid(),
      name: formPurchase.name,
      price: formPurchase.price,
      usageCost: formPurchase.usageCost,
      purchasedAt: parseInt(moment(formPurchase.purchasedDate).format('X')),
      currentUses: purchase.currentUses || 0,
      expectedUses: purchase.expectedUses || Math.ceil(formPurchase.price / formPurchase.usageCost),
    };
    if (isEmpty(purchase)) {
      dispatch(addPurchase(combinedPurchase));
    } else {
      dispatch(updatePurchase(combinedPurchase));
    }

    setFormTitle(`Add a new Purchase`);
    setFormButton(`Add`);
    form.resetFields();
  };

  const onCancel = () => {
    dispatch(editPurchase({}));
  };

  return (
    <Content>
      <Title level={2}>{formTitle}</Title>
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
          <Input />
        </Form.Item>

        <Form.Item
          label='Product price'
          name='price'
          normalize={(value) => parseFloat(value)}
          rules={[{ required: true, message: 'Please input Product price' }]}
        >
          <Input prefix='$' type='number' min={0} step='0.01' />
        </Form.Item>

        <Form.Item
          label='Usage cost'
          name='usageCost'
          normalize={(value) => parseFloat(value)}
          rules={[{ required: true, message: 'Please input Usage cost' }]}
        >
          <Input prefix='$' type='number' min={0} step='0.01' />
        </Form.Item>

        <Form.Item
          label='Purchased date'
          name='purchasedDate'
        >
          <DatePicker
            format={dateFormat} style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Space size='large' style={{ display: 'flex', justifyContent: 'center' }}>
            <Button type='primary' style={{ width: '5rem' }} htmlType='submit'>{formButton}</Button>
            <Button type='secondary' style={{ width: '5rem' }} onClick={onCancel}>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default PurchaseForm;

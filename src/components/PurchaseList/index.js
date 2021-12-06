import { Col, Row, Typography } from 'antd';
import React from 'react';
import { Content } from '../common/styles';
import PurchaseItemList from './PurchaseItemList';

const { Title } = Typography;

const PurchaseList = () => {
  return (
    <Content>
      <Title level={2}>History</Title>
      <Row>
        <Col span={24}>
          <PurchaseItemList />
        </Col>
      </Row>
    </Content>
  );
};

export default PurchaseList;

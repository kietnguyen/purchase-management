import { Col, List as AntList, Row, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { getPurchases } from '../../actions/purchases';
import { Content } from '../common/styles';
import PurchaseItem from './purchaseItem';

const { Title } = Typography;

const List = styled(({ children, ...props }) =>
  <AntList {...props}>{children}</AntList>)`
  &.ant-list {
    .ant-list-item {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
`;

const data = [
  {
    id: 1,
    name: 'Food Processor',
    price: 100,
    serviceCost: 1,
    currentUsage: 5,
    expectedUsage: 100,
    purchasedAt: 1636709651,
  },
  {
    id: 2,
    name: 'eReader',
    price: 200,
    serviceCost: 0.25,
    currentUsage: 300,
    expectedUsage: 400,
    purchasedAt: 1605519251,
  },
  {
    id: 3,
    name: 'Tablet',
    price: 150,
    serviceCost: 0.25,
    currentUsage: 625,
    expectedUsage: 600,
    purchasedAt: 1542360851,
  },
];

const PurchaseList = () => {
  return (
    <Content>
      <Title level={2}>History</Title>
      <Row>
        <Col span={24}>
          <List
            bordered
            itemLayout='horizontal'
            dataSource={data}
            renderItem={(item) => <PurchaseItem key={item.id} item={item} />}
          />
        </Col>
      </Row>
    </Content>

  );
};

export default PurchaseList;

import {
  CheckCircleFilled,
  DeleteOutlined,
  DollarCircleOutlined,
  EditOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Col, List as AntList, Progress, Row, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { priceFormatter } from '../../utils/currency';
import { dateFormatter } from '../../utils/datetime';
import { Content, IconWrapper } from '../common/styles';

const { Title, Link } = Typography;
const { Item } = AntList;

const List = styled(({ children, ...props }) =>
  <AntList {...props}>{children}</AntList>)`
  &.ant-list {
    .ant-list-item {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
`;

const PriceWrapper = styled.div`
  margin-left: 8px;
  margin-right: 16px;
`;

const itemUsageProgress = (current, total) => {
  const percent = current / total * 100;

  return (
    percent >= 100 ?
      <CheckCircleFilled style={{ fontSize: '24px', color: '#1da57a' }} /> :
      <Progress type='circle' percent={percent} width={24} strokeWidth={16} showInfo={false} />
  );
};

const itemDescription = (item) => (
  <>
    <IconWrapper><ShoppingCartOutlined /></IconWrapper>
    Purchased: {dateFormatter(item.purchasedAt)}
    <br />
    <IconWrapper><DollarCircleOutlined /></IconWrapper>
    Service cost: {priceFormatter(item.serviceCost, { precision: 2 })}
  </>
);

const itemDetail = (item) => {
  return (
    <Item
      key={item.id}
      actions={[
        <Link><EditOutlined /></Link>,
        <Link><DeleteOutlined /></Link>,
      ]}
    >
      <Item.Meta
        avatar={itemUsageProgress(item.currentUsage, item.expectedUsage)}
        title={item.name}
        description={itemDescription(item)}
      />
      <PriceWrapper>{priceFormatter(item.price)}</PriceWrapper>
    </Item>
  );
};

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

const History = () => {

  return (
    <Content>
      <Title level={2}>History</Title>
      <Row>
        <Col span={24}>
          <List
            bordered
            itemLayout='horizontal'
            dataSource={data}
            renderItem={(item) => itemDetail(item)}
          />
        </Col>
      </Row>
    </Content>

  );
};
export default History;

import { ProfileOutlined, WalletOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Typography } from 'antd';
import React from 'react';
import { priceFormatter } from '../../utils/currency';
import { Content, IconWrapper } from '../common/styles';

const { Title } = Typography;

const totalSpent = 123;
const totalItems = 12;

const Overview = () => {
  return (
    <Content style={{ marginTop: 0 }}>
      <Title level={2}>Overview</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic title='Total Spent' value={priceFormatter(totalSpent)}
                       prefix={<IconWrapper><WalletOutlined /></IconWrapper>} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic title='Total Items' value={totalItems}
                       prefix={<IconWrapper><ProfileOutlined /></IconWrapper>} />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Overview;

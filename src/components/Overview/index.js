import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { Content } from '../common/styles';
import TotalItemsStatistic from './TotalItemsStatistic';
import TotalSpentStatistic from './TotalSpentStatistic';

const { Title } = Typography;

const Overview = () => {
  return (
    <Content style={{ marginTop: 0 }}>
      <Title level={2}>Overview</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <TotalSpentStatistic />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <TotalItemsStatistic />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Overview;

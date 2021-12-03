import { ProfileOutlined, WalletOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic, Typography } from 'antd';
import sumBy from 'lodash/sumBy';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { priceFormatter } from '../../utils/currency';
import { Content, IconWrapper } from '../common/styles';

const { Title } = Typography;

const Overview = () => {
  const purchases = useSelector((state) => state.purchases);

  const [totalSpent, setTotalSpent] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalSpent(sumBy(purchases, 'price'));
    setTotalItems(purchases.length);
  }, [purchases]);

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

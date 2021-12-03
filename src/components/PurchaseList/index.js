import { Col, List as AntList, Row, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Content } from '../common/styles';
import PurchaseItem from './PurchaseItem';

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

const PurchaseList = () => {
  const purchases = useSelector((state) => state.purchases);

  return (
    <Content>
      <Title level={2}>History</Title>
      <Row>
        <Col span={24}>
          <List
            bordered
            itemLayout='horizontal'
            dataSource={purchases}
            renderItem={(item) => <PurchaseItem key={item.id} item={item} />}
          />
        </Col>
      </Row>
    </Content>

  );
};

export default PurchaseList;

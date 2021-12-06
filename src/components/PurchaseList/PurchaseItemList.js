import { List as AntList } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PurchaseItem from './PurchaseItem';

const List = styled(({ children, ...props }) => <AntList {...props}>{children}</AntList>)`
  &.ant-list {
    .ant-list-item {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
`;

const PurchaseItemList = () => {
  const purchases = useSelector((state) => state.purchases.purchases);

  return (
    <List
      bordered
      itemLayout='horizontal'
      dataSource={purchases}
      rowKey='id'
      renderItem={(item) => <PurchaseItem item={item} />}
    />
  );
};

export default PurchaseItemList;

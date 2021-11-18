import {
  CheckCircleFilled,
  DeleteOutlined,
  DollarCircleOutlined,
  EditOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { List as AntList, Progress, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { priceFormatter } from '../../utils/currency';
import { dateFormatter } from '../../utils/datetime';
import { IconWrapper } from '../common/styles';

const { Link } = Typography;
const { Item } = AntList;

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

const PurchaseItem = ({ item, ...props }) => {
  return (
    <Item
      actions={[
        <Link><EditOutlined /></Link>,
        <Link><DeleteOutlined /></Link>,
      ]}
      {...props}
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

export default PurchaseItem;

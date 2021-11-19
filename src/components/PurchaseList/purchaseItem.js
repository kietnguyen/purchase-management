import {
  CheckCircleFilled,
  CheckCircleOutlined,
  DeleteOutlined,
  DollarCircleOutlined,
  EditOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { List as AntList, Progress, Typography } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addProductUse } from '../../actions/purchases';
import { dateFormatter } from '../../utils/datetime';
import { IconWrapper } from '../common/styles';

const { Link } = Typography;
const { Item } = AntList;

const UseIcon = styled(CheckCircleOutlined)`
  font-size: 1.5rem;
  color: #1890ff;
`;

const itemUsageProgress = (current, total) => {
  const percent = current / total * 100;

  return (
    percent >= 100 ?
      <CheckCircleFilled style={{ fontSize: '24px', color: '#1da57a' }} /> :
      <Progress type='circle' percent={percent} width={24} strokeWidth={12} showInfo={false} />
  );
};

const itemDescription = (item) => {
  const remainingUses = item.expectedUses - item.currentUses;
  return (
    <span style={{ verticalAlign: 'middle' }}>
      <IconWrapper><ShoppingCartOutlined /></IconWrapper>
      <span>Purchased: {dateFormatter(item.purchasedAt)}</span>
      <br />
      <IconWrapper><DollarCircleOutlined /></IconWrapper>
      {remainingUses > 0 ?
        <span>Remaining uses: {remainingUses}</span> :
        <span>Enjoy it while it lasts!!!</span>}
    </span>
  );
};

const PurchaseItem = ({ item, ...props }) => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(addProductUse(item.id));

  return (
    <Item
      actions={[
        <Link><EditOutlined /></Link>,
        <Link><DeleteOutlined /></Link>,
      ]}
      {...props}
    >
      <Item.Meta
        avatar={itemUsageProgress(item.currentUses, item.expectedUses)}
        title={item.name}
        description={itemDescription(item)}
      />
      <UseIcon onClick={onClick} />
    </Item>
  );
};

export default PurchaseItem;

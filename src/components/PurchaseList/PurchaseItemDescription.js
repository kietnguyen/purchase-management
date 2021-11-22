import {
  DeleteOutlined,
  DollarCircleOutlined,
  EditOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Space, Typography } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { editPurchase } from '../../actions/purchase';
import { dateFormatter } from '../../utils/datetime';
import { IconWrapper } from '../common/styles';

const { Link } = Typography;

const PurchaseItemDescription = ({ item }) => {
  const dispatch = useDispatch();
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
      <br />
      <Space size='large'>
        <Link onClick={() => dispatch(editPurchase(item))}><EditOutlined /> Edit</Link>
        <Link onClick={() => { console.log('onDelete');}}><DeleteOutlined /> Delete</Link>
      </Space>
    </span>
  );
};

export default PurchaseItemDescription;

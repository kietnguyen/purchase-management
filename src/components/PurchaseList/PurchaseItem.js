import { CheckCircleFilled, CheckCircleOutlined } from '@ant-design/icons';
import { List as AntList, Progress, Typography } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductUse } from '../../actions/purchases';
import PurchaseItemDescription from './PurchaseItemDescription';

const { Item } = AntList;
const { Link } = Typography;

const itemUsageProgress = (current, total) => {
  const percent = current / total * 100;

  return (
    percent >= 100 ?
      <CheckCircleOutlined style={{ fontSize: '24px', color: '#1da57a' }} /> :
      <Progress type='circle' percent={percent} width={24} strokeWidth={12} showInfo={false} />
  );
};

const PurchaseItem = ({ item, ...props }) => {
  const dispatch = useDispatch();

  return (
    <Item
      actions={[
        <Link>
          <CheckCircleFilled
            onClick={() => dispatch(addProductUse(item.id))}
            style={{ fontSize: '2rem' }}
          /><br />Use
        </Link>,
      ]}
      {...props}
    >
      <Item.Meta
        avatar={itemUsageProgress(item.currentUses, item.expectedUses)}
        title={item.name}
        description={<PurchaseItemDescription item={item} />}
      />
    </Item>
  );
};

export default PurchaseItem;
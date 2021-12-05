import { CheckCircleFilled, CheckCircleOutlined, CheckOutlined } from '@ant-design/icons';
import { List as AntList, Progress, Typography } from 'antd';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addProductUse } from '../../actions/purchases';
import PurchaseItemDescription from './PurchaseItemDescription';

const { Item } = AntList;
const { Link, Text } = Typography;

const UsageProgress = ({ percent }) => {
  return (
    percent >= 100 ?
      <CheckCircleOutlined style={{ fontSize: '24px', color: '#1da57a' }} /> :
      <Progress type='circle' percent={percent} width={24} strokeWidth={12} showInfo={false} />
  );
};

const UseButton = ({ id, percent }) => {
  const dispatch = useDispatch();

  if (percent < 100) {
    return <Link>
      <CheckCircleFilled
        onClick={() => dispatch(addProductUse(id))}
        style={{ fontSize: '2rem' }}
      /><br />Use
    </Link>;
  }

  return <CheckOutlined style={{ color: '#1da57a', fontSize: '2rem' }} />;
};

const PurchaseItem = ({ item }) => {
  const dispatch = useDispatch();
  const percent = item.currentUses / item.expectedUses * 100;

  return useMemo(
    () => (
      <Item actions={[<UseButton id={item.id} percent={percent} />]}>
        <Item.Meta
          avatar={<UsageProgress percent={percent} />}
          title={item.name}
          description={<PurchaseItemDescription item={item} />}
        />
      </Item>
    ), [dispatch, item],
  );
};

export default PurchaseItem;

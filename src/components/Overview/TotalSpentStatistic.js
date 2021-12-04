import WalletOutlined from '@ant-design/icons/WalletOutlined';
import React from 'react';
import { useSelector } from 'react-redux';
import Statistic from './Statistic';

const TotalSpentStatistic = () => {
  const totalSpent = useSelector((state) => state.purchases.statistics.totalSpent);
  return <Statistic title='Total Spent' value={totalSpent} icon={<WalletOutlined />} />;
};

export default TotalSpentStatistic;

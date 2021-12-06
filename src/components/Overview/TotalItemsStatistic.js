import ProfileOutlined from '@ant-design/icons/ProfileOutlined';
import React from 'react';
import { useSelector } from 'react-redux';
import Statistic from './Statistic';

const TotalItemsStatistic = () => {
  const totalItems = useSelector((state) => state.purchases.statistics.totalItems);
  return <Statistic title='Total Spent' value={totalItems} icon={<ProfileOutlined />} />;
};

export default TotalItemsStatistic;

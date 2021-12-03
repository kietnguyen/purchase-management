import ProfileOutlined  from '@ant-design/icons/ProfileOutlined';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Statistic from './Statistic';

const TotalItemsStatistic = () => {
  const purchases = useSelector((state) => state.purchases);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    setTotalItems(purchases.length);
  }, [purchases]);

  return useMemo(() => (
      <Statistic title='Total Spent' value={totalItems} icon={<ProfileOutlined />} />
    ),
    [totalItems],
  );
};

export default TotalItemsStatistic;

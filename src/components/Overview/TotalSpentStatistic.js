import WalletOutlined from '@ant-design/icons/WalletOutlined';
import sumBy from 'lodash/sumBy';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { priceFormatter } from '../../utils/currency';
import Statistic from './Statistic';

const TotalSpentStatistic = () => {
  const purchases = useSelector((state) => state.purchases);
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    setTotalSpent(priceFormatter(sumBy(purchases, 'price')));
  }, [purchases]);

  return useMemo(() => {
      return <Statistic title='Total Spent' value={totalSpent} icon={<WalletOutlined />} />;
    },
    [totalSpent],
  );
};

export default TotalSpentStatistic;

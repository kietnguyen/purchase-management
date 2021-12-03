import { Statistic as AntStatistic } from 'antd';
import { IconWrapper } from '../common/styles';

const Statistic = ({ title, value, icon }) => (
  <AntStatistic title={title} value={value} prefix={<IconWrapper>{icon}</IconWrapper>} />
);

export default Statistic;

import PropTypes from 'prop-types';
import { StatItem, StatLabel, StatPerc } from './StatisticsListItem.styled';
import getRandomHexColor from '../../utils/randomcolor';

export default function StatisticsListItem({ label, percentage }) {
  return (
    <StatItem style={{ backgroundColor: `${getRandomHexColor()}` }}>
      <StatLabel>{label}</StatLabel>
      <StatPerc>{percentage}%</StatPerc>
    </StatItem>
  );
}

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';
import css from './StatisticsListItem.module.css';
import getRandomHexColor from '../../utils/randomcolor';

export default function StatisticsListItem({ label, percentage }) {
  return (
    <li
      className={css.item}
      style={{ backgroundColor: `${getRandomHexColor()}` }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

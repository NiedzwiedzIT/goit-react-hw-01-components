import PropTypes from 'prop-types';
import { StatSection, StatTitle, StatList } from './Statistics.styled';
import StatisticsListItem from 'components/StatisticsListItem/StatisticsListItem';

export default function Statistics({ title, stats }) {
  const statistics = stats.map(stat => (
    <StatisticsListItem
      key={stat.id}
      label={stat.label}
      percentage={stat.percentage}
    />
  ));
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>{statistics}</StatList>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

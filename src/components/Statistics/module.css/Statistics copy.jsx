import PropTypes from 'prop-types';
import css from './Statistics.module.css';
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
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statlist}>{statistics}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

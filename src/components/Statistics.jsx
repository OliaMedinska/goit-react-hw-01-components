import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

const Statistics = ({stats}) => {
   return (
   <section className="statistics">
   <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    {
      stats.map((statItem) => (
        <StatisticsItem
        key={statItem.id}
        id={statItem.id}
        label={statItem.label}
        percentage={statItem.percentage}
        />
      ))
    }
  </ul>
</section>)
};

Statistics.propTypes = {
    stats: PropTypes.array.isRequired,
  };


export default Statistics;
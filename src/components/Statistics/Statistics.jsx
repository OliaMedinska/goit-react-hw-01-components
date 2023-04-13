
import StatisticsItem from './StatisticsItem';
import PropTypes from 'prop-types';
import './Statistics.css';

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
    stats: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired     
    })).isRequired,
  };


export default Statistics;
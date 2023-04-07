import PropTypes from 'prop-types';

const StatisticsItem = ({id, label, percentage}) => {
    return (
      <li className="item" id={id}>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
      </li>
      )
  };    

StatisticsItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
import PropTypes from 'prop-types';

const StatisticsItem = ({id, label, percentage}) => {
    return (
      <li class="item" id={id}>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}%</span>
      </li>
      )
  };    

StatisticsItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
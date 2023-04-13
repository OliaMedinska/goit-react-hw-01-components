
import PropTypes from 'prop-types';
import './Transaction.css';

const TransactionHistoryItems = ({type, amount, currency}) => {
    return(
        <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        </tr>
    )
}

TransactionHistoryItems.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount:  PropTypes.string.isRequired,
    currency:  PropTypes.string.isRequired,
  };

  export default TransactionHistoryItems;
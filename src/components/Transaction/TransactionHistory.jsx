
import PropTypes from 'prop-types';
import TransactionHistoryItems from './TransactionHistoryItems';
import './Transaction.css';

const TransactionHistory = ({items}) => {
    return(
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>


  <tbody>
    {
      items.map((transactionItem) => (
        <TransactionHistoryItems
        key={transactionItem.id}
        id={transactionItem.id}
        type={transactionItem.type}
        amount={transactionItem.amount}
        currency={transactionItem.currency}
        />
      ))
    }
  </tbody>
</table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount:  PropTypes.string.isRequired,
      currency:  PropTypes.string.isRequired      
    })).isRequired,
  };

  export default TransactionHistory;
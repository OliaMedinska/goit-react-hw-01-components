import PropTypes from 'prop-types';
import TransactionHistoryItems from './TransactionHistoryItems';

const TransactionHistory = ({items}) => {
    return(
        <table class="transaction-history">
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
    items: PropTypes.array.isRequired,
  };

  export default TransactionHistory;
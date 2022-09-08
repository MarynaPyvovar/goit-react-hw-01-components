import { TableWrapper, TableHead, TableBody } from './TransactionHistoryStyled';
import PropTypes from "prop-types";

export const TransactionHistory = ({items}) => {
  return (<TableWrapper>
    <TableHead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHead>
    <TableBody>
      {items.map(({ id, type, amount, currency }) => 
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      )}
    </TableBody>
  </TableWrapper>)
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })),
}
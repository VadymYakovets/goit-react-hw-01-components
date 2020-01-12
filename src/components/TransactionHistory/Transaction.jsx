import React from 'react';
import styles from './Transaction.module.css';

const TransactionHistory = ({ items }) => (
  <div className="table">
    <div className={styles.hometasktitle}> hw-1.4</div>

    <table className={styles.table_blur}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(el => {
        return (
          <tbody key={el.id}>
            <tr>
              <td>{el.type}</td>
              <td>{el.amount}</td>
              <td>{el.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  </div>
);

export default TransactionHistory;

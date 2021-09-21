import numeral from 'numeral';
import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';


export const ExpenseTotal = (props) => {
  const cantidad = props.expenses.length;

  const total = props.expenses
    .map((expense) => expense.amount)
    .reduce((sum, val) => (sum + val), 0);

  return (
    <div>
      {
        cantidad === 0 ? null : (
          <h1>Viewing {cantidad} {cantidad === 1 ? 'expnese' : 'expneses'} totaling {numeral(total / 100).format('$0,0.00')}</h1>
        )
      }
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseTotal);

import numeral from 'numeral';
import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';


export const ExpenseTotal = ({ expensesCount, expensesTotal }) => {

  return (
    <div>
      {
        expensesCount !== 0 &&
        <h1>Viewing {expensesCount} {expensesCount === 1 ? 'expnese' : 'expnses'} totaling {numeral(expensesTotal / 100).format('$0,0.00')}</h1>
      }
    </div>
  );

}

const mapStateToProps = (state) => {
  const visibleEspenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesCount: visibleEspenses.length,
    expensesTotal: expensesTotal(visibleEspenses)
  };
};

export default connect(mapStateToProps)(ExpenseTotal);

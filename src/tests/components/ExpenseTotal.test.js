import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseTotal } from '../../components/ExpensesTotal'
import expenses from '../fixtures/expenses'


test('should render expenses totoal with multiple expenses', () => {
    const wrapper = shallow(<ExpenseTotal expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render expenses list with one expenses', () => {
    const wrapper = shallow(<ExpenseTotal expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render expenses list with no expenses', () => {
    const wrapper = shallow(<ExpenseTotal expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
})
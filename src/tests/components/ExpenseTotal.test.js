import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseTotal } from '../../components/ExpensesTotal'
import expenses from '../fixtures/expenses'


test('should render expenses totoal with multiple expenses', () => {
    const wrapper = shallow(<ExpenseTotal expensesCount={3} expensesTotal={114195} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render expenses list with one expenses', () => {
    const wrapper = shallow(<ExpenseTotal expensesCount={1} expensesTotal={195} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render expenses list with no expenses', () => {
    const wrapper = shallow(<ExpenseTotal expensesCount={0} expensesTotal={0} />);
    expect(wrapper).toMatchSnapshot();
})
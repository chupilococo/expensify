import { AddExpensePage } from "../../components/AddExpensePage";
import { shallow } from 'enzyme'
import React from 'react'
import expenses from '../fixtures/expenses'

let onSubmitSpy, historySpy, wrapper;

beforeEach(() => {
    onSubmitSpy = jest.fn()
    historySpy = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy} />)

})


test('shuld render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handdle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
})
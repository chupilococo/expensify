import React from 'react';
import { shallow } from 'enzyme';
import ExpeseForm from '../../components/ExpenseForm';
import Expeneses from '../fixtures/expenses'
import moment from 'moment';


test('should render expenseForm correctly', () => {
    const wrapper = shallow(<ExpeseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenseForm with data correctly', () => {
    const wrapper = shallow(<ExpeseForm expense={Expeneses[0]} />);
    expect(wrapper).toMatchSnapshot();
});


test('should render error for invalid submition', () => {
    const wrapper = shallow(<ExpeseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on inputchange', () => {
    const value = 'nueva descripsion'
    const wrapper = shallow(<ExpeseForm />)
    wrapper.find('input').at(0).simulate('change', { target: { value } })
    expect(wrapper.state('description')).toBe(value)
})

test('should set description on textArea change', () => {
    const value = 'nueva descripsion textArea'
    const wrapper = shallow(<ExpeseForm />)
    wrapper.find('textarea').simulate('change', { target: { value } })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount change', () => {
    const value = '123.12'
    const wrapper = shallow(<ExpeseForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount')).toBe(value)
})

test('should set amount change', () => {
    const value = '123.12w'
    const wrapper = shallow(<ExpeseForm />)
    wrapper.find('input').at(1).simulate('change', { target: { value } })
    expect(wrapper.state('amount')).toBe("")
})


test('should call onSubmitForm with the correct object', () => {
    const onSubmitSpay = jest.fn();
    const wrapper = shallow(<ExpeseForm expense={Expeneses[0]} onSubmit={onSubmitSpay} />);

    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpay).toHaveBeenLastCalledWith(
        {
            "amount": Expeneses[0].amount,
            "createdAt": Expeneses[0].createdAt,
            "description": Expeneses[0].description,
            "note": Expeneses[0].note
        }
    )
})

test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpeseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should set calendarfocus to true', () => {
    const focused = true
    const wrapper = shallow(<ExpeseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toEqual(focused);
})
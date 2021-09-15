import selectExpenses from '../../selectors/expenses'
import moment from 'moment';
import expenses from '../fixtures/expenses';


test('sould filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date'
    };
    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[1]])
})


test('shuld filter by start Date', () => {

    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(100)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('shuld filter by end Date', () => {

    const filters = {
        text: '',
        sortBy: 'date',
        endDate: moment(100)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]])
})

test('shuld sort by Date', () => {

    const filters = {
        text: '',
        sortBy: 'date'
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('shuld sort by Amount', () => {

    const filters = {
        text: '',
        sortBy: 'Amount'
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]])
})
import moment from 'moment';
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('shuld set up default values', () => {
    const expected = []
    const result = expensesReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual(expected);
});


test('shuld remove expense by id', () => {
    const expected = [
        expenses[0],
        expenses[2]
    ]
    const result = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
    expect(result).toEqual(expected);
});

test('shuld not remove expense by id if id is not valid', () => {
    const expected = expenses
    const result = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '-1' });
    expect(result).toEqual(expected);
});

test('shuld add an expense', () => {
    const new_expense = {
        id: '5',
        description: 'add_expense',
        note: '',
        amount: 1012300,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }
    const expected = [...expenses, new_expense]

    const result = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense: new_expense });
    expect(result).toEqual(expected);
});

test('shuld edit an expense', () => {
    const edited_expense = {
        id: '2',
        description: 'todo lo que quiera',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }
    const expected = [expenses[0], edited_expense, expenses[2]]

    const result = expensesReducer(expenses, { type: 'EDIT_EXPENSE', updates: edited_expense, id: edited_expense.id });
    expect(result).toEqual(expected);
});

test('shuld not edit an expense if expense not found', () => {
    const edited_expense = {
        id: '15',
        description: 'todo lo que quiera',
        note: '',
        amount: 109500,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }
    const expected = expenses

    const result = expensesReducer(expenses, { type: 'EDIT_EXPENSE', updates: edited_expense, id: edited_expense.id });
    expect(result).toEqual(expected);
});
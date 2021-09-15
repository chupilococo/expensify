import moment from 'moment';
import filterReducer from '../../reducers/filters'

test('shuld set up default filter values', () => {
    const expected = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const result = filterReducer(undefined, { type: '@@INIT' });
    expect(result).toEqual(expected);
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const defaultState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const state = filterReducer(defaultState, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toBe('date');
})


test('should set text filter', () => {
    const expected = {
        text: 'texto',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const result = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'texto' });
    expect(result).toEqual(expected);

})

test('should set startDate filter', () => {
    const expected = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment().endOf('month')
    }
    const result = filterReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) });
    expect(result).toEqual(expected);

})

test('should set endDate filter', () => {
    const expected = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment(0)
    }
    const result = filterReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0) });
    expect(result).toEqual(expected);

})
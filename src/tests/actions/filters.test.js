import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

test('sould generate setStartDate action', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});

test('sould generate setEndDate action', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    });
});


// SET_TEXT_FILTER
test('sould generate setTextFilter action', () => {
    const action = setTextFilter('Esto es una prueba');
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: 'Esto es una prueba'
    });
});

// SET_TEXT_FILTER
test('sould generate setTextFilter action default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    });
});

// SORT_BY_DATE
test('sould generate sortByDate action', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

// SORT_BY_AMOUNT
test('sould generate sortByAmout action', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
import * as types from '../../store/action-types/action-types';
import * as actions from '../../store/actions/accommodation';
// import fetchAccommodations from '../../store/accommodations/fetchAllAccomodations';
// import * as newTypes from '../../store/action-types/accommodations';
// import * as newActions from '../../store/accommodations/accommodationActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetching accommodation test suit', () => {
  it('should create an action to a fetch all accommodations', () => {
    const payload = 'fetch successfully';
    const expectedAction = {
      type: types.FETCH_ACCOMMODATION_SUCCESS,
      payload,
    };
    expect(actions.fetchAccommodationSuccess(payload)).toEqual(expectedAction);
  });
  it('should create an action if fetching all accommodation fail', () => {
    const error = 'fetching fail';
    const expectedAction = {
      type: types.FETCH_ACCOMMODATION_FAILURE,
      error,
    };
    expect(actions.fetchAccommodationFailure(error)).toEqual(expectedAction);
  });
  it('should create an action while fetching is pending', () => {
    const expectedAction = {
      type: types.FETCH_ACCOMMODATION_PENDING,
    };
    expect(actions.fetchAccommodationPending()).toEqual(expectedAction);
  });
  //   Single accommodation actions test
  it('should create an action to fetch single accommodation', () => {
    const payload = 'fetch successfully';
    const expectedAction = {
      type: types.FETCH_SINGLE_ACCOMMODATION_SUCCESS,
      payload,
    };
    expect(actions.fetchSingleAccommodationSuccess(payload)).toEqual(
      expectedAction
    );
  });
  it('should create an action if fetching single accommodation fail', () => {
    const error = 'some error text';
    const expectedAction = {
      type: types.FETCH_SINGLE_ACCOMMODATION_FAILURE,
      error,
    };
    expect(actions.fetchSingleAccommodationFailure(error)).toEqual(
      expectedAction
    );
  });
  it('should create an action while fetching is pending', () => {
    const expectedAction = {
      type: types.FETCH_SINGLE_ACCOMMODATION_PENDING,
    };
    expect(actions.fetchSingleAccommodationPending()).toEqual(expectedAction);
  });
});

// describe('async fetch accommodation test', ()=>{
//     afterEach(() => {
//         fetchMock.restore()
//     })
//     it('creates FETCH_ACCOMMODATION_SUCCESS when fetching accommodations has been done', () => {
//         fetchMock.getOnce('/accommodations', {
//         body: { todos: ['do something'] },
//         headers: { 'content-type': 'application/json' }
//     })
//     const expectedActions = [
//       { type: types.FETCH_ACCOMMODATION_PENDING },
//       { type: types.FETCH_ACCOMMODATION_FAILURE },
//       { type: types.FETCH_ACCOMMODATION_SUCCESS, body: { todos: ['do something'] } }
//     ]
//     const store = mockStore({ todos: [] })
//     console.log('storeeeeeee: ', store)
//     console.log('test fetching accommodations: ', store.dispatch(fetchAccommodations()))
//     return store.dispatch(fetchAccommodations()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
// })

// reducers test

// ACCOMMODATION CRUD ACTION TEST

// describe('accommodation crud test suit', () => {
//   it('should create an action to a create accommodation', () => {
//     const payload = 'accommodation created successfully';
//     const expectedAction = {
//       type: newTypes.CREATE_ACCOMMODATION_SUCCESS,
//       payload,
//     };
//     expect(newActions.createAccommodation(payload)).toEqual(expectedAction);
//   });
// });

import accommodations from '../../store/accommodations/accommodationReducer';
import accommodation from '../../store/accommodations/singleAccommodation';
import fetchAllAccommodations from  '../../store/accommodations/fetchAllAccomodations';
import fetchSingleAccommodations from  '../../store/accommodations/fetchSingleAccommodation';
import * as types from '../../store/action-types/action-types'

describe('fetch accommodation reducer', ()=>{
    it('should return the initial state for fetching all accommodations', () => {
    expect(accommodations(undefined, {})).toEqual(
      {
        pending: false,
        accommodations: [],
        error: null,
        accommodation: {},
      }
    )
  })
    it('should return the initial state for fetching single accommodations', () => {
    expect(accommodation(undefined, {})).toEqual(
      {
        pending: false,
        accommodations: [],
        error: null,
        accommodation: {},
      }
    )
  })
  it('should handle FETCH_ACCOMMODATION_PENDING', ()=>{
      expect(
      accommodations([], {
        type: types.FETCH_ACCOMMODATION_PENDING,
      })
    ).toEqual({
        pending: true,
      })
      
  })
  it('should handle FETCH_SINGLE_ACCOMMODATION_PENDING', ()=>{
    expect(
        accommodation([], {
            type: types.FETCH_SINGLE_ACCOMMODATION_PENDING,
        })
        ).toEqual({
            pending: true,
        })
  })
  it('should handle FETCH_ACCOMMODATION_SUCCESS', ()=>{
      expect(
      accommodations([], {
        type: types.FETCH_ACCOMMODATION_SUCCESS,
        payload: 'some data'
      })
    ).toEqual({
        accommodations: "some data", 
        pending: false
    })
      
  })
  it('should handle FETCH_SINGLE_ACCOMMODATION_SUCCESS', ()=>{
      expect(
      accommodation([], {
        type: types.FETCH_SINGLE_ACCOMMODATION_SUCCESS,
        payload: 'some data'
      })
    ).toEqual({
         accommodation: "some data", 
         pending: false
      })
      
  })
  it('should handle FETCH_ACCOMMODATION_FAILURE', ()=>{
      expect(
      accommodations([], {
        type: types.FETCH_ACCOMMODATION_FAILURE,
        error: 'some error'
      })
    ).toEqual({
        error: "some error", 
        pending: false
    })
      
  })
  it('should handle FETCH_SINGLE_ACCOMMODATION_FAILURE', ()=>{
      expect(
      accommodation([], {
        type: types.FETCH_SINGLE_ACCOMMODATION_FAILURE,
        error: 'some error'
      })
    ).toEqual({
        error: "some error", 
        pending: false
    })
      
  })

})
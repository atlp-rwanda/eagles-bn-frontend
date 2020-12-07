import React from 'react'
import {Signup} from '../components/Signup'
import { render, cleanup} from './signup-test-utils'
import {signupReducer} from '../store/signup/reducer'
import * as types from '../store/signup/types'
import * as actions from '../store/signup/actions'
import configureMockStore from 'redux-mock-store'
import {userSignup} from '../store/signup/actions'
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import axios from 'axios'

configure({ adapter: new Adapter() });
describe("SIGNUP",()=>{
  afterEach(cleanup);
  test("Should render signup",()=>{
    shallow(<Signup />);
  }) 
  test("Should render signup",()=>{
    render(<Signup />);
  }) 
  it("renders title", () => {
    const wrapper = shallow(<Signup />);
    const value = wrapper.find("p").text();
    expect(value).toEqual("Already have account? Login!")
  });
  it('should return the initial state', () => {
    expect(signupReducer(undefined, {})).toEqual(
      {
        isLoading:false,
        error:"",
        message:""
      }
    )
  })
  it('should handle SIGNUP_REQUEST', () => {
    expect(
      signupReducer([], {
        type: types.SIGNUP_REQUEST
      })
    ).toEqual(
      {
        isLoading: true
      }
    )

})
  it('should handle SIGNUP_SUCCESS', () => {
    expect(
      signupReducer([], {
        type: types.SIGNUP_SUCCESS,
        payload: 'Thanks for registering on our site. Verification Email has been sent to you. Please visit your email to verify your account'
      })
    ).toEqual(
      {
        message: 'Thanks for registering on our site. Verification Email has been sent to you. Please visit your email to verify your account',
        isLoading: false
      }
    )

})


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  
  it('creates SIGNUP_SUCCESS when creating user', () => {
    const user ={
      first_name:"Patience",
      last_name:"ISHIMWE",
      email:"brownpatience66@gmail.com",
      password:"12345678",
      confirmPassword:"12345678"
    }
    const initialState = {
      isLoading:false,
      error:"",
      message:""
  }
const store = mockStore(initialState)
return store.dispatch(userSignup())
.then(() => {
  const actions = store.getActions()
  const expectedPayload = { type: types.SIGNUP_SUCCESS }
  expect(actions).toEqual([expectedPayload])
})
})

})
})

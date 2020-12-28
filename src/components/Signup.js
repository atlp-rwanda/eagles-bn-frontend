import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { userSignup } from '../store/signup/actions';
import './signup.scss';
import { Link } from 'react-router-dom';
import SocialLogin from './socialLogin/socialView';

const formValid = ({
  formErrors, generalErrors, successMessage, ...rest
}) => {
  let valid = true;
  // validate form being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });
  // validte form being filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });
  return valid;
};

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirmPassword: '',
      generalErrors: '',
      successMessage: '',
      formErrors: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { error, message } = this.props;
    if (error !== prevProps.error || message !== prevProps.message) {
      if (error) {
        this.setState({ ...this.state, generalErrors: error });
      }
      if (message) {
        this.setState({ ...this.state, successMessage: message });
      }
    }
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    const { formErrors } = this.state;
    switch (name) {
      case 'first_name':
        formErrors.first_name = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : '';
        break;
      case 'last_name':
        formErrors.last_name = value.length < 3 && value.length > 0 ? 'minimum 3 characters required' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : 'Invalid email';
        break;
      case 'password':
        formErrors.password = value.length < 8 && value.length > 0 ? 'minimum 8 characters required' : '';
        break;
      case 'confirmPassword':
        formErrors.confirmPassword = this.state.password !== value ? 'password mismatch' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (formValid(this.state)) {
      const {
        first_name, last_name, email, password, confirmPassword,
      } = this.state;
      const newUser = {
        first_name,
        last_name,
        email,
        password,
        confirmPassword,
      };
      this.props.userSignup(newUser);
      console.log(e);
    } else {
      this.setState({ ...this.state, generalErrors: 'All fields are required!' });
    }
  }

  render() {
    const { generalErrors, successMessage, formErrors } = this.state;
    return (
      <>
        <div className="signup-container">
          <div className="signup-container-image" />
          <div className="signup-container-form">
            <div className="signup-container-form-header-section">
              <h1 className="signup-container-form-header-section-title">
                Join
                <b>Barefoot Nomad</b>
                !
              </h1>
              <h2 className="signup-container-form-header-section-link">
                Already have account?
                <Link to="/login">Login</Link>
              </h2>
            </div>
            <form onSubmit={this.handleSubmit} className="form-group">
              <h1 className={successMessage ? 'text-success' : 'text-invalid'}>{successMessage || generalErrors}</h1>
              <label> First name</label>
              {' '}
              <input type="text" name="first_name" onChange={this.handleChange} className={formErrors.first_name.length > 0 ? 'form-control input-invalid' : 'form-control'} />
              {formErrors.first_name ? <span className="text-invalid">{formErrors.first_name}</span> : ''}
              <br />
              <label>Last name</label>
              {' '}
              <input type="text" name="last_name" onChange={this.handleChange} className={formErrors.last_name.length > 0 ? 'form-control input-invalid' : 'form-control'} />
              {formErrors.last_name ? <span className="text-invalid">{formErrors.last_name}</span> : ''}
              <br />
              <label>Email</label>
              {' '}
              <input type="text" name="email" onChange={this.handleChange} className={formErrors.email.length > 0 ? 'form-control input-invalid' : 'form-control'} />
              {formErrors.email ? <span className="text-invalid">{formErrors.email}</span> : ''}
              <br />
              <label>Password</label>
              {' '}
              <input type="password" name="password" onChange={this.handleChange} className={formErrors.password.length > 0 ? 'form-control input-invalid' : 'form-control'} />
              {formErrors.password ? <span className="text-invalid">{formErrors.password}</span> : ''}
              <br />
              <label> Confirm password </label>
              <input type="password" name="confirmPassword" onChange={this.handleChange} className={formErrors.confirmPassword.length > 0 ? 'form-control input-invalid' : 'form-control'} />
              {formErrors.confirmPassword ? <span className="text-invalid">{formErrors.confirmPassword}</span> : ''}
              <br />
              <button type="submit" className={!this.props.isLoading ? 'btn btn-primary' : 'btn btn-primary btn-loading'} data-testid="Register">{this.props.isLoading ? 'Submitting...' : 'Register'}</button>
              <SocialLogin />
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.signupReducer.isLoading,
  message: state.signupReducer.message,
  error: state.signupReducer.error,
});
export default connect(mapStateToProps, { userSignup })(Signup);

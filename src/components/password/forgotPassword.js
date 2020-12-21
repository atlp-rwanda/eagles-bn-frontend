import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import './password.scss';
import sendEmail from '../../store/actions/forgot.password';

export class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      generalErrors: '',
      successMessage: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    // console.log('name', e.target.name);
    const { value } = e.target;
    this.setState({ email: value });
    console.log('state', this.state);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    const { forgotEmail } = this.props;
    await forgotEmail({
      email,
    });
  }

  resetInput(e) {
    if (e.target.id === 'email') {
      this.setState({ emailError: '', isEmailValid: false });
    }
  }

  render() {
    const { email, emailError } = this.state;
    return (
      <>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="form-wrap">
            <div className="error">{emailError}</div>
            <h3>Forgot Password?</h3>

            <div className="form-box">
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={this.handleChange}
                value={email}
                required
                error={this.state.error}
                onKeyUp={this.checkEmailInput}
                onFocus={this.resetInput}
              />
            </div>
            <div className="form-submit">
              <Button
                content="Submit"
                value="request reset"
                className="submit-button"
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
});
const mapDispatchToProps = (dispatch) => ({
  forgotEmail: (data) => dispatch(sendEmail(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

import React, { Component } from 'react';
import './login.scss';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Loader from '../../../components/loading/loading';
import { loggingIn } from '../../../store/actions/auth';
import { FormInput } from '../../../components/form/input/input';
import { getIsLoggedIn, getLoginError, getLoginPending } from '../../../store/reducers/auth';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: '',
        password: '',
      },
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(e) {
    this.setState({ form: { ...this.state.form, email: e.target.value } });
  }

  handlePassword(e) {
    this.setState({ form: { ...this.state.form, password: e.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.loggingIn(this.state.form);
  }

  render() {
    if (this.props.is_logged_in) return <Redirect to="/dashboard" from="/login" />;
    return (
      <div className="login-container">
        <div className="login-container__image" />
        <div className="login-container__form">
          {this.props.loading ? <Loader /> : ''}
          <div className="login-container__form__title">
            <h2 className="login-container__form__title-title">
              Welcome to
              <b> Barefoot Nomad</b>
              !
            </h2>
            <p className="login-container__form__title-register">
              New here? &nbsp;
              <Link to="/signup">create an account!</Link>
            </p>
          </div>
          <form className="login-container__form-form" onSubmit={this.handleSubmit}>
            <FormInput
              label="E-mail"
              type="email"
              required
              invalid={this.props.error && this.props.error.status !== 500}
              changed={this.handleEmail}
              value={this.state.form.email}
              errMessage={this.props.error ? this.props.error.message : null}
            />
            <FormInput
              type="password"
              value={this.state.form.password}
              label="Password"
              changed={this.handlePassword}
            />
            <a href="#" className="forgot-password">Forgot password?</a>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary"
              >
                {this.props.loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loggingIn: (payload) => dispatch(loggingIn(payload)),
});
const mapStateToProps = (state) => ({
  loading: state.loading,
  error: getLoginError(state),
  is_logged_in: getIsLoggedIn(state),
  pending: getLoginPending(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

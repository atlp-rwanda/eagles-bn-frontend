/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import './login.scss';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import qs from 'qs';
import PropTypes from 'prop-types';
import Loader from '../../../components/loading/loading';
import { loggingIn } from '../../../store/actions/auth';
import { FormInput } from '../../../components/form/input/input';
import { getIsLoggedIn, getLoginError, getLoginPending } from '../../../store/reducers/auth';
import SocialLogin from '../../../components/socialLogin/socialView';
import oauthActions from '../../../store/actions/oauth/oauthAction';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: '',
        password: '',
      },
      oauthSuccess: false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line consistent-return
  componentDidMount() {
    const { oauthSuccess } = this.props;
    const { token, error, message } = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    if (token) {
      oauthSuccess({ token });
      this.setState({ oauthSuccess: true });
    }
    oauthSuccess({ error, message });
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
    const { is_logged_in, loading, error } = this.props;
    const { oauthSuccess, form } = this.state;
    if (is_logged_in || oauthSuccess) return <Redirect to="/dashboard" from="/login" />;
    return (
      <div className="login-container">
        <div className="login-container__image" />
        <div className="login-container__form">
          {loading ? <Loader /> : ''}
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
            <FormInput label="E-mail" type="email" required invalid={error && error.status !== 500} changed={this.handleEmail} value={form.email} errMessage={error ? error.message : null} />
            <FormInput type="password" value={form.password} label="Password" changed={this.handlePassword} />
            <a href="#" className="forgot-password">Forgot password?</a>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">{loading ? 'Logging in...' : 'Login'}</button>
              <SocialLogin />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  oauthSuccess: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loggingIn: (payload) => dispatch(loggingIn(payload)),
  oauthSuccess: (payload) => dispatch(oauthActions(payload)),
});
const mapStateToProps = (state) => ({
  loading: state.loading,
  error: getLoginError(state),
  is_logged_in: getIsLoggedIn(state),
  pending: getLoginPending(state),
  token: state.token,
  oauthErrors: state.oauthErrors,
  authMessage: state.authMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

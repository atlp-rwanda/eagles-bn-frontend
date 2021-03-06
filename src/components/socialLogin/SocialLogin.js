/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import googlelogo from '../../assets/images/google-logo.png';
import facebooklogo from '../../assets/images/facebook-logo.png';
import './SocialLogin.scss';

// const localUrl = 'http://localhost:4000/api';
const onlineUrl = 'https://eagles-bn-backend-staging.herokuapp.com/api';
const SocialLogin = ({ name }) => (
  <a className="social-login-link" href={`${onlineUrl}/user/auth/${name}`}>
    <img
      src={name === 'google' ? googlelogo : facebooklogo}
      alt={name === 'google' ? 'google' : 'facebook'}
    />
  </a>
);

SocialLogin.propTypes = {
  name: PropTypes.oneOf(['facebook', 'google']).isRequired,
};
export default SocialLogin;

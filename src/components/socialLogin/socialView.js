/* eslint-disable linebreak-style */
import React from 'react';
import SocialLogin from './SocialLogin';

function socialView() {
  const socialStyle = {
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <p style={{ fontSize: '2rem', padding: '0.7rem 0' }}>Or Use</p>
      <div style={socialStyle}>
        <SocialLogin name="google" />
        <SocialLogin name="facebook" />
      </div>
    </div>
  );
}

export default socialView;

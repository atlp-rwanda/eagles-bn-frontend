import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updatePassword } from '../../store/actions/forgot.password';
import InputField from '../common/InputField';
import Button from '../common/Button';
import './password.scss';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    const { editPassword } = this.props;
    await editPassword({
      password,
      confirmPassword,
    });
  }

  checkPasswordInput(e) {
    const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,64}$/;
    if (!validPasswordRegex.test(e.target.value)) {
      this.setState({
        passwordError: 'Should be alphanumeric and atleast 8 characters',
        isPasswordValid: false,
      });
    } else {
      this.setState({
        passwordError: '',
        isPasswordValid: true,
      });
    }
  }

  checkConfirmPasswordInput(e) {
    const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,64}$/;
    if (!validPasswordRegex.test(e.target.value)) {
      this.setState({
        confirmPasswordError: 'Should be alphanumeric and atleast 8 characters',
        isPasswordValid: false,
      });
    } else {
      this.setState({
        confirmPasswordError: '',
        isPasswordValid: true,
      });
    }
  }

  resetInput(e) {
    if (e.target.id === 'pass') {
      this.setState({ passwordError: '', isPasswordValid: false });
    }
    if (e.target.id === 'confirmPass') {
      this.setState({ confirmPasswordError: '', isPasswordValid: false });
    }
  }

  render() {
    const { passwordError, confirmPasswordError } = this.state;

    return (
      <>
        <div className="container">
          <form className="form-wrap" onSubmit={this.handleSubmit}>
            <div className="error">{passwordError}</div>

            <h3>Reset Password</h3>
            <div className="form-box">
              <InputField
                type="password"
                name="password"
                placeholder="New Password"
                id="pass"
                className="input"
                required
                error={this.state.error}
                onChange={this.handleChange}
                onKeyUp={this.checkPasswordInput}
                onFocus={this.resetInput}
              />
            </div>
            <div className="error">{confirmPasswordError}</div>
            <div className="form-box">
              <InputField
                type="password"
                name="confirmPassword"
                id="confirmPass"
                className="input"
                placeholder="Confirm new password"
                error={this.state.error}
                onChange={this.handleChange}
                onKeyUp={this.checkConfirmPasswordInput}
                onFocus={this.resetInput}
              />
            </div>

            <div className="form-submit">
              <Button content="Reset Password" value="Reset Password" className="submit-button" />
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  password: state.password,
  confirmPassword: state.confirmPassword,
});

const mapDispatchToProps = (dispatch) => ({
  editPassword: (data) => dispatch(updatePassword(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

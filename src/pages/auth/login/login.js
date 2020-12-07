import React, {Component} from "react";
import "./login.scss"
import axios from "axios";
import Loader from "../../../components/loading/loading";
import {connect} from "react-redux";
import {authStatus} from "../../../store/actions/auth";
import {setLoading} from "../../../store/actions/loading";
import {Redirect} from "react-router-dom";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            errMessage: "",
            loginFailed: false,
            loading: false,
            form: {
                email: '',
                password: ''
            },
            redirect:false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(e) {
        this.setState({form: {...this.state.form, email: e.target.value}});
    }

    handlePassword(e) {
        this.setState({form: {...this.state.form, password: e.target.value}});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.authStatus(true)
        this.props.setLoading(true)
        axios.post("/user/login", {...this.state.form})
            .then(({data}) => {
                localStorage.setItem("token", data.accessToken)
                this.props.setLoading(false)
                this.setState({redirect:true})
            })
            .catch(({response}) => {
                if (response && response.status !== 500) {
                    this.setState({errMessage: "Invalid login credentials", loginFailed: true})
                }
                console.log("Failed")
                this.props.setLoading(false)
            })

    }

    render() {
        if (this.state.redirect)
            return <Redirect to="/dashboard" from="/login"/>

        return (
            <div className="login-container">

                <div className="login-container__image">
                </div>
                <div className="login-container__form">
                    {this.props.loading ? <Loader/> : ''}
                    <div className="login-container__form__title">
                        <h2 className="login-container__form__title-title">Welcome to <b>Barefoot Nomad</b>!
                        </h2>
                        <p className="login-container__form__title-register">
                            New here? <a href="#">create an account!</a>
                        </p>
                    </div>

                    <form className="login-container__form-form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email"
                                   className={`form-control ${this.state.loginFailed ? 'input-invalid' : ''}`}
                                   onChange={this.handleEmail}
                                   value={this.state.form.email} id="email"/>
                            {this.state.loginFailed ?
                                <span className="text-invalid">{this.state.errMessage}</span> : ''}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                            <input type="password" className="form-control" id="password" onChange={this.handlePassword}
                                   value={this.state.form.password}/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                {this.props.loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        authStatus: (payload) => dispatch(authStatus(payload)),
        setLoading: (payload) => dispatch(setLoading(payload))
    }
};
const mapStateToProps = (state) => {
    const {loading} = state
    return {loading}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

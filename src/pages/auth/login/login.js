import React, {Component} from "react";
import "./login.css"
import axios from "axios";
import Loading from "../../../components/loading/loading";

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            errMessage: "",
            loginFailed: false,
            loading: false,
            form: {
                email: '',
                password: ''
            }
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
        this.setState({loading: true})
        axios.post("/user/login", {...this.state.form})
            .then(({data}) => {
                localStorage.setItem("token", data.accessToken)
                this.setState({loading: false, errMessage: "", loginFailed: false, form: {email: "", password: ""}})
            })
            .catch(({response}) => {
                if (response.status !== 500) {
                    this.setState({errMessage: "Invalid login credentials", loginFailed: true})
                    this.setState({loading: false})
                }
            })

    }

    render() {
        return (
            <div className="login-container">

                <div className="login-container__image">
                </div>
                <div className="login-container__form">
                    {this.state.loading ?<Loading/>:''}
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
                                {this.state.loading ? 'Logging in...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

import React, {Component} from "react";
import Navigation from "../components/navigation/navigation";
import "./main.scss";
import {Route} from "react-router-dom";
import Requests from "../../pages/requests/requests";
import Dashboard from "../../pages/dashboard/dashboard";
import {connect} from "react-redux";
import {fetchCurrentUser} from "../../store/actions/current_user";
import {getUser, getUserError, getUserPending} from "../../store/reducers/user";

class Main extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                {this.props.user ? (
                    <div className="container">
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/requests" component={Requests}/>
                    </div>
                ) : ''}
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchCurrentUser();
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentUser: () => dispatch(fetchCurrentUser())
    }
};
const mapStateToProps = state => ({
    error: getUserError(state),
    user: getUser(state),
    pending: getUserPending(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(Main)

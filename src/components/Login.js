import React, {Component} from 'react';
import Textbox from './Textbox.js';
import Button from './Button.js';
import * as userActions from '../actions';
import {connect} from 'react-redux';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnClick () {
        // dispatch an action
        this.props.dispatch(userActions.handleLogin(this.state.username, this.state.password));
    }

    handleOnChange (event) {
        const target = event.currentTarget;

        this.setState({
            [target.name]: target.value
        });
    }

    render () {
        return (
            <div className="col-md-3 col-md-offset-5">
                <form>
                    <div>
                        <label>Enter UserName</label>
                        <Textbox nameofinput='username' typeofinput='text' handleOnChange={this.handleOnChange}/>


                    </div>

                    <div>
                        <label>Enter Password</label>
                        <Textbox nameofinput='password' typeofinput='text' handleOnChange={this.handleOnChange}>

                        </Textbox>
                    </div>

                    <div>
                        <label>click me</label>
                        <Button handleOnClick={this.handleOnClick}>

                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return state.authentication;
}
const connectedLogin = connect(mapStateToProps)(Login);
export default connectedLogin;

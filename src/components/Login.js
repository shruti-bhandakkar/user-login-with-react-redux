import React, {Component} from 'react';
import Textbox from './Textbox.js';
import Button from './Button.js';
import {userActions} from './actions';
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
        console.log("UserName: " + this.state.username);
        console.log("Passsword: " + this.state.password);
        // send data back to parent component
        // this.props.handleLogin(this.state.username, this.state.password);

        // dispatch an action
        this.props.dispatch.userActions.login(this.state.username, this.state.password);
    }

    handleOnChange (event) {
        const target = event.currentTarget;
        console.log([target.name])
        this.setState({
            [target.name]: target.value
        });
    }

    render () {
        return (
            <div>
                <div>
                    <p>Enter UserName</p>
                    <Textbox nameofinput='username' typeofinput='text' handleOnChange={this.handleOnChange}/>


                </div>

                <div>
                    <p>Enter Password</p>
                    <Textbox nameofinput='password' typeofinput='password' handleOnChange={this.handleOnChange}>

                    </Textbox>
                </div>

                <div>
                    <p>Click ME!</p>
                    <Button handleOnClick={this.handleOnClick}>

                    </Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {state.authentication};
}
const connectedApp = connect(mapStateToProps)(App);
export default Login;

import {userActionTypes} from '../actionTypes';

const handleLogin = (username, password) => {

    // simulating ajax call
    if(username === 'shrutiB' && password === 'shruti') {
        return {
            type: userActionTypes.LOGIN_SUCCESS,
            loginSuccess: true,
            username: username
        }
    }
}

const handleLogout = () => {

}

const handleSignup = (userObj) => {

}

export {
     handleLogin,
     handleLogout,
     handleSignup
}

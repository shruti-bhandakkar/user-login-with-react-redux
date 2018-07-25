import userActions from './actionTypes';

handleLogin(username, password) {
    // simulating ajax call
    if(username == 'shrutiB' && password == 'shruti') {
        return {
            type: userActions.LOGIN_SUCCESS,
            loginSuccess: true,
            username: username
        }
    }
}

handleLogout() {

}

handleSignup(userObj) {

}

export const userActions = {
    login: handleLogin,
    logout: handleLogout,
    signup: handleSignup
}

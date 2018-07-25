import userActions from './actionTypes';

const initialState = {};

function authentication(state = initialState, action) {
    switch (action.type) {
        case userActions.LOGIN_SUCCESS:
            return {
                login: true,
                username: action.username
            }
    }
}

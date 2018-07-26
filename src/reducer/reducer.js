import userActions from '../actionTypes';

export const authentication = (state = {}, action) => {
    switch (action.type) {
        case userActions.LOGIN_SUCCESS:
            return {
                login: true,
                username: action.username
            }

        default:
            return state;

    }
}

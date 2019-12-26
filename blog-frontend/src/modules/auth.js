import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITALIZE_FORM = 'auth/INITIALIZE_FORM';

export const sampleAction = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form, // register, login
        key, // username, password, passwordconfirm
        value, // 실제 바꾸는 값
    }),
);

const initialState = {};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, action) => state,
    },
    initialState
);

export default auth;
import createDataContext from './createDataContext';
import loginApi from '../api/REEL';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';


const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    }
};

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await loginApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('mainflow');
        } catch (err) {
            dispatch({
                type: 'add_error',
                payload: 'Invalid Email or password'
            });
        }
    };


export const { Provider, Context } = createDataContext(
    authReducer,
    { signin },
    { token: null, errorMessage: '' }
);
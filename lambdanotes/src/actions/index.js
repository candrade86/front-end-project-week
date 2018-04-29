import axios from 'axios';
axios.defaults.withCredentials = true;


export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = ' AUTHENTICATION_ERROR';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';
export const GET_USERS = 'GET_USERS';

export const GETTING = 'GETTING';
export const GOT = 'GOT';
export const ERROR = 'ERROR';


export const authError = error => {
    return {
      type: AUTHENTICATION_ERROR,
      payload: error
    };
  };

export const register = (email, username, password, confirmPassword, history) => dispatch => {
  
      axios
        .post('https://quiet-brushlands-69280.herokuapp.com/api/user/signup', { email, username, password })
        .then(res => {
            
          dispatch({
            type: USER_REGISTERED,
            users: res.data
          });
          history.push('/signin');
        })
        .catch(() => {
          dispatch(authError('Failed to register user'));
        });
    };

export const login = (username, password, history) => dispatch => {

    axios
        .post('https://quiet-brushlands-69280.herokuapp.com/api/user/login', { username, password })
        .then(res => {
            dispatch({ type: USER_AUTHENTICATED, authenticated: res.data });
            history.push('/');
        })
        .catch(() => {
            dispatch(authError('user does not exist in the db'));
        });
}    

export const getNotes = () => dispatch => {
    dispatch({ type: GETTING });

    axios
        .get('https://quiet-brushlands-69280.herokuapp.com/api/notes')
        .then(res => {
            dispatch({ type: GOT, notes: res.data })
        })
        .catch(error => {
            dispatch({ type: ERROR, errorMessage: 'Error getting the data'})
        });

};

import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  INIT_URL,
  SIGNOUT_USER_SUCCESS, UPDATE_LOAD_USER,
  USER_DATA,
  USER_TOKEN_SET
} from "../../constants/ActionTypes";
import axios from 'util/Api'

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export const userSignUp = ({email, password, name}) => {
  console.log(email, password);
  return (dispatch) => {
    dispatch({type: FETCH_START});
    axios.post('auth/register', {
        email: email,
        password: password,
        name: name
      }
    ).then(({data}) => {
      console.log("data:", data);
      if (data.result) {
        localStorage.setItem("token", data.token.access_token);
        axios.defaults.headers.common['authorization'] = "Bearer " + data.token.access_token;
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: USER_TOKEN_SET, payload: data.token.access_token});
        dispatch({type: USER_DATA, payload: data.user});
      } else {
        console.log("payload: data.error", data.error);
        dispatch({type: FETCH_ERROR, payload: "Network Error"});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};

export const userSignIn = (params) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    axios.post('auth/login', params
    ).then(({data}) => {
      console.log("userSignIn: ", data);
      if (data.result) {
        let token = data.data.signedRequest
        localStorage.setItem("token", token);
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: USER_TOKEN_SET, payload: token});
        dispatch(getUser(token));
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};

export const getUser = (token) => {
  return (dispatch) => {
    if (!token) {
      token = localStorage.getItem('token');
    }
    //axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    dispatch({type: FETCH_START});
    axios.post('auth/me',
    ).then(({data}) => {
      console.log("getUser: ", data);
      if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: USER_DATA, payload: data.data});
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_SUCCESS});
      dispatch({type: UPDATE_LOAD_USER, payload: false});
      console.log("Error****:", error.message);
    });
  }
};

export const userSignOut = () => {

  return (dispatch) => {
    dispatch({type: FETCH_START});

    axios.post('auth/logout').then(({data}) => {
      if (data.result) {
        localStorage.removeItem("token");
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: SIGNOUT_USER_SUCCESS});
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
};

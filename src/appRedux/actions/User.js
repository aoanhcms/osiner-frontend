import axios from 'util/Api'
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  USER_PAGE_LIST,
  LOADING_PAGELISTS_MANAGE
} from "../../constants/ActionTypes";
export const openPageList = (type) => {
  return (dispatch) => {
    dispatch({type: LOADING_PAGELISTS_MANAGE, payload: type});
  }
}
export const getPageList = (user_id, data) => {
    return (dispatch) => {
      dispatch({type: FETCH_START});
      axios.post(`${user_id}/page_lists`, data
      ).then(({data}) => {
        if (data.result) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: USER_PAGE_LIST, payload: data.data});//data.pages
        } else {
          console.log("payload: data.error", data.error);
          dispatch({type: FETCH_ERROR, payload: "Network Error"});
        }
      }).catch(function (error) {
        dispatch({type: FETCH_ERROR, payload: error.message});
        console.log("Error****:", error.message);
      });
    }
}

export const getPageLists = (user_id) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    axios.get(`${user_id}/pages`).then(({data}) => {
      if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: USER_PAGE_LIST, payload: data.data});//data.pages
      } else {
        console.log("payload: data.error", data.error);
        dispatch({type: FETCH_ERROR, payload: "Network Error"});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
}

export const connectFaceBookGetPageLists = (user_id, data) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    axios.post(`${user_id}/get_new_page_lists`, data
    ).then(({data}) => {
      if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: USER_PAGE_LIST, payload: data.data});//data.pages
      } else {
        console.log("payload: data.error", data.error);
        dispatch({type: FETCH_ERROR, payload: "Network Error"});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
}

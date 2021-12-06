import axios from 'util/Api'
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  PAGE_CONNECT,
  PAGE_DATA
} from "../../constants/ActionTypes";

export const connectPage = (user_id, page_id) => {
    return (dispatch) => {
      dispatch({type: FETCH_START});
      axios.post(`${user_id}/pages/${page_id}`, {connecting:true}
      ).then(({data}) => {
        if (data.result) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: PAGE_CONNECT, payload: true});
          dispatch({type: PAGE_DATA, payload: data.data});
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

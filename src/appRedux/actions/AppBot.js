import { SET_APP_ID, MY_APP_LISTS, FETCH_SUCCESS, FETCH_ERROR, NEW_BLANK_APP, APPBOT_DATA} from '../../constants/ActionTypes'

import axios from 'util/Api'
export const setAppIdLocation = (id) => {
  return (dispatch) => {
    dispatch({type: SET_APP_ID, payload: id})
  }
}
export const getMyApps = (user_id) => {
  return (dispatch) => {
    axios.get(`/${user_id}/app/app_lists`).then(({data}) => {
      if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: MY_APP_LISTS, payload: data.data})
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
}
export const createBlankApp = (user_id) => {
  return (dispatch) => {
    axios.post(`${user_id}/app/create_blank_app`, {}).then(({data}) => {
      if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: NEW_BLANK_APP, payload: data.data})
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
}

export const cloneAppBot = (user_id, appbot_id) => {
  return (dispatch) => {
    axios.post(`${user_id}/app/${appbot_id}`, {}).then(({data}) => {
      if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        //dispatch({type: NEW_BLANK_APP, payload: data.data})
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
}
export const deleteAppBot = (user_id, appbot_id) => {
  return (dispatch) => {
    axios.delete(`${user_id}/app/${appbot_id}`, {}).then(({data}) => {
      if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        //dispatch({type: DELETE_APPBOT, payload: data.data})
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
}
export const addPageToAppBot = (user_id, appbot_id, page_id) => {
  return (dispatch) => {
    axios.patch(`${user_id}/app/${appbot_id}`, {
      page_id: page_id,
      type: 'add_page_to_bot'
    }).then(({data}) => {
      if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: APPBOT_DATA, payload: data.data})
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
}
export const getAppBot = (user_id, appbot_id) => {
  return (dispatch) => {
    axios.get(`${user_id}/app/${appbot_id}`)
    .then(({data}) => {
      if (data.result) {
        dispatch({type: FETCH_SUCCESS});
        dispatch({type: APPBOT_DATA, payload: data.data})
      } else {
        dispatch({type: FETCH_ERROR, payload: data.error});
      }
    }).catch(function (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
      console.log("Error****:", error.message);
    });
  }
}

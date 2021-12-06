import { SET_APP_ID, MY_APP_LISTS, NEW_BLANK_APP, APPBOT_DATA } from "../../constants/ActionTypes";

const INIT_STATE = {
  app_bot_id : null,
  app_lists: [],
  appbot_data: null
}

export default (state = INIT_STATE, action) => {
  switch (action.type){
    case SET_APP_ID : {
      return {...state, app_bot_id: action.payload}
    }
    case MY_APP_LISTS: {
      return {...state, app_lists: action.payload}
    }
    case NEW_BLANK_APP : {
      return {...state, app_lists: createNewApp(state.app_lists, action.payload)}
    }
    case APPBOT_DATA : {
      return {...state, appbot_data: action.payload}
    }
    default: return state;
  }
}

function createNewApp(app_lists, payload){
  return app_lists;
}

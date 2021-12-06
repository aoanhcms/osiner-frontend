import {PAGE_DATA, PAGE_CONNECT} from '../../constants/ActionTypes'

const INIT_STATE = {
  page: {},
  connected: false
}
export default (state= INIT_STATE, action) => {
  switch(action.type){
    case PAGE_DATA: {
      return {...state, pages: action.payload}
    }
    case PAGE_CONNECT: {
      return {...state, connected: action.payload}
    }
    default:
      return state;
  }
}

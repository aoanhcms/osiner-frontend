import {USER_PAGE_LIST, LOADING_PAGELISTS_MANAGE} from '../../constants/ActionTypes'

const INIT_STATE = {
  pages: [],
  loadingPageLists: false
}
export default (state= INIT_STATE, action) => {
  switch(action.type){
    case USER_PAGE_LIST: {
      return {...state, pages: action.payload}
    }
    case LOADING_PAGELISTS_MANAGE: {
      return {...state, loadingPageLists: action.payload}
    }
    default:
      return state;
  }
}

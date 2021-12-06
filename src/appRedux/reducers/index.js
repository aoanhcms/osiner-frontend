import {combineReducers} from "redux";
import Settings from "./Settings";
import Auth from "./Auth";
import Common from "./Common";
import {connectRouter} from 'connected-react-router'
import AppBot from './AppBot';
import User from './User';
import Page from './Page';

export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  common: Common,
  app_bot: AppBot,
  user: User,
  page: Page
});

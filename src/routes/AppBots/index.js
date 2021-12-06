
import React, {useEffect} from "react";
import {useRouteMatch, Route, Switch} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {setAppIdLocation, getAppBot} from '../../appRedux/actions/AppBot'
import asyncComponent from "util/asyncComponent";

const App = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const {authUser} = useSelector(({auth}) => auth);
  const {app_bot_id} = useSelector(({app_bot}) => app_bot);

  useEffect(() => {
    let app_id = match.params['app_id'];
    if(app_bot_id === null) {
      dispatch(setAppIdLocation(app_id));
      //connect
      if(authUser.fb_id) dispatch(getAppBot(authUser.fb_id, app_id));
    }
  }, [dispatch, match.params, authUser])


  return (<>
    <Switch>
      <Route path={`${match.url}/dashboard`} exact component={asyncComponent(() => import('./Dashboard'))}/>
      <Route path={`${match.url}/setting`} exact component={asyncComponent(() => import('./Setting/index'))}/>
      <Route path={`${match.url}/structure`} exact component={asyncComponent(() => import('./Structure'))}/>
      <Route path={`${match.url}/members`} exact component={asyncComponent(() => import('./Member'))}/>
      <Route path={`${match.url}`} component={asyncComponent(() => import('./PageNotFound'))}/>
    </Switch>
  </>);
};

export default App;

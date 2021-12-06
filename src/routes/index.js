import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}price`} exact={true}  component={asyncComponent(() => import('./pricingTable/Basic/index'))}/>
      <Route path={`${match.url}invite`} exact={true}  component={asyncComponent(() => import('./pricingTable/Basic/index'))}/>
      <Route path={`${match.url}install/:app_id([0-9a-z]+)`} exact={true}  component={asyncComponent(() => import('./pricingTable/Basic/index'))}/>
      <Route path={`${match.url}group/:app_id([0-9a-z]+)`} exact={true}  component={asyncComponent(() => import('./pricingTable/Basic/index'))}/>

      <Route path={`${match.url}app_lists`} exact={true}  component={asyncComponent(() => import('./AppLists'))}/>
      <Route path={`${match.url}id/:app_id([0-9a-z]+)`} component={asyncComponent(() => import('./AppBots'))}/>
      <Route path={`${match.url}`} exact={true} component={asyncComponent(() => import('./AppBots/updateInfo'))}/>

      <Route path={`${match.url}`} exact={true} component={asyncComponent(() => import('./PageNotFound'))}/>
    </Switch>
  </div>
);

export default App;

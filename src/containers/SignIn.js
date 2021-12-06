import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {userSignIn} from "../appRedux/actions";
//import IntlMessages from "util/IntlMessages";
import InfoView from "components/InfoView";
import {FacebookLogin} from "components/Facebook/FacebookLogin"
import {FACEBOOK_APP_ID} from 'util/config'

const SignIn = (props) => {
  const dispatch = useDispatch();
  const authUser = useSelector(({auth}) => auth.authUser);

  const loading = useSelector(({common}) => common.loading);
  const onFinish = response => {
    //console.log("finish",values)
    if(response.status !== 'unknown'){
      dispatch(userSignIn(response));
    }
  };

  useEffect(() => {
    if (authUser !== null) {
      props.history.push('/');
    }
  }, [authUser, props.history]);
  return (
    <div className="gx-app-login-wrap">
      <div className="gx-app-login-container">
          {loading === false && <FacebookLogin
          appId={FACEBOOK_APP_ID}
          callback={onFinish}
          />}
          <InfoView/>
      </div>
    </div>
  );
};

export default SignIn;

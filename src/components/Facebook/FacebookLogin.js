import React from 'react'
import ReactFacebookLogin from 'react-facebook-login'
export const FacebookLogin = ({appId, callback}) => (<ReactFacebookLogin
  appId={appId}
  fields="name,email,picture"
  scope="public_profile,email"
  callback={callback}
  disableMobileRedirect={true}
/>)

export const FacebookLoginPermission = ({appId, onFinish}) => (<ReactFacebookLogin
  appId={appId}
  fields="name,email,picture"
  scope="pages_manage_posts,pages_manage_engagement,pages_manage_ads,public_profile,pages_messaging,email,read_page_mailboxes,pages_show_list,pages_messaging,pages_read_engagement,pages_manage_metadata"
  callback={onFinish}
  disableMobileRedirect={true}

/>)

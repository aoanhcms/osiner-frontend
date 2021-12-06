import React from 'react'
import FacebookLoginRender from 'react-facebook-login/dist/facebook-login-render-props'

export const FacebookLoginPermissionNav = ({appId, callback, render}) => (<FacebookLoginRender
  appId={appId}
  fields="name,email,picture"
  scope="pages_manage_posts,pages_manage_engagement,pages_manage_ads,public_profile,pages_messaging,email,read_page_mailboxes,pages_show_list,pages_messaging,pages_read_engagement,pages_manage_metadata"
  callback={(res) => {
    if(res.status !== 'unknown')
      callback(res)
  }}
  size="small"
  disableMobileRedirect={true}
  render={render}
/>)

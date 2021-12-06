import React from "react";
import { Menu } from "antd";
import {Link} from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import {
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
//import IntlMessages from "../../util/IntlMessages";
import {useSelector, useDispatch} from "react-redux";
import {userSignOut, setAppIdLocation} from '../../appRedux/actions'
const SidebarContent = ({sidebarCollapsed, setSidebarCollapsed, app_bot_id}) => {
  const dispatch = useDispatch();
  let {themeType} = useSelector(({settings}) => settings);
  let {pathname} = useSelector(({common}) => common);

  app_bot_id = 'id/' + app_bot_id;
  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  const signOut = () => {
    dispatch(setAppIdLocation(null))
    dispatch(userSignOut());
  }
  return (
    <>
      <SidebarLogo sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed}/>
      <div className="gx-sidebar-content">

        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

              <Menu.Item key={`${app_bot_id}/group_store`}>
                <Link to={`/${app_bot_id}/group_store`}><i className="icon icon-feedback"/>
                  <span>Store</span></Link>
              </Menu.Item>
            <Menu.Item key={`/${app_bot_id}/structure`}>
              <Link to={`/${app_bot_id}/structure`}><i className="icon icon-setting"/>
                <span>Structure</span>
              </Link>
            </Menu.Item>
            <Menu.Item key={`/${app_bot_id}/setting`}>
              <Link to={`/${app_bot_id}/setting`}><i className="icon icon-setting"/>
                <span>Setting</span>
              </Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
        <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
            mode="inline">

          <Menu.Item key={`/profile`}>
              <Link to={`/profile`}><i className="icon icon-user"/>
                <span>Danh Sinh</span>
              </Link>
            </Menu.Item>
            <Menu.Item key={`/${app_bot_id}/logout`}>
              <Link to={`/${app_bot_id}/logout`} onClick={signOut}><i className="icon icon-setting"/>
                <span>LogOut</span>
              </Link>
            </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};
export default SidebarContent;


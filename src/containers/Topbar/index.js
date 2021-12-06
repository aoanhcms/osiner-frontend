import React, {useEffect} from "react";
import {Layout, Popover} from "antd";
import {Link} from "react-router-dom";
import CustomScrollbars from "util/CustomScrollbars";
import languageData from "./languageData";
import {switchLanguage, toggleCollapsedSideNav, addPageToAppBot, connectFaceBookGetPageLists, openPageList, getPageLists} from "../../appRedux/actions";//getPageLists
//import UserInfo from "../../components/UserInfo";
//import Auxiliary from "util/Auxiliary";
import {NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE} from "../../constants/ThemeSetting";
import {useDispatch, useSelector} from "react-redux";
import {ConnectPageBtn, ModalPageLists} from '../../components/Facebook/PageLists'
import { DeleteOutlined, ReloadOutlined } from "@ant-design/icons";

const {Header} = Layout;

const Topbar = () => {

  const {locale, navStyle} = useSelector(({settings}) => settings);
  const { navCollapsed, width} = useSelector(({common}) => common);
  const {pages, loadingPageLists} = useSelector(({user}) => user);

  const {authUser} = useSelector(({auth}) => auth);

  const {app_bot_id, appbot_data} = useSelector(({app_bot}) => app_bot);

  const dispatch = useDispatch();

  useEffect(() => {
    if(pages.length === 0 && loadingPageLists === true){
      dispatch(getPageLists(authUser.fb_id));
    }
  }, [pages, loadingPageLists]);

  const connectPageClick = () => {
    if(authUser.fb_id !== null
      && app_bot_id !== null
      && appbot_data !== null
      && appbot_data.page_id !== null) {
      dispatch(addPageToAppBot(authUser.fb_id, app_bot_id, appbot_data.page_id))
    }
  }
  const deletePageClick = (app_bot_id) => {
    console.log('delete page list', authUser.fb_id, app_bot_id);
  }
  const callback = (page_id) => {
    //get xong sẽ hiển thị danh sách page
    if(authUser.fb_id != null && page_id != null) {
      dispatch(openPageList(!loadingPageLists))
      dispatch(connectFaceBookGetPageLists(authUser.fb_id, page_id))
    }
  }
  const languageMenu = () => (
    <CustomScrollbars className="gx-popover-lang-scroll">
      <ul className="gx-sub-popover">
        {languageData.map(language =>
          <li className="gx-media gx-pointer" key={JSON.stringify(language)} onClick={() =>
            dispatch(switchLanguage(language))
          }>
            <i className={`flag flag-24 gx-mr-2 flag-${language.icon}`}/>
            <span className="gx-language-text">{language.name}</span>
          </li>
        )}
      </ul>
    </CustomScrollbars>);
  return (
    <Header>
      {app_bot_id !== null && (navStyle === NAV_STYLE_DRAWER || ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < TAB_SIZE)) ?
        <div className="gx-linebar gx-mr-3">
          <i className="gx-icon-btn icon icon-menu"
             onClick={() => {
               dispatch(toggleCollapsedSideNav(!navCollapsed));
             }}
          />
        </div> : null}
      <Link to="/" className="gx-d-block gx-d-lg-none gx-pointer">
        <img alt="" src="/assets/images/w-logo.png"/></Link>

        {app_bot_id !== null && (<>
          {appbot_data === null
            && <ConnectPageBtn callback={callback} />}
          {appbot_data !== null
            && appbot_data.page_id !== null
            && (<>{appbot_data.name} | {appbot_data.page_id.name} (<>
            <a onClick={(e) => {
              e.preventDefault();
              dispatch(openPageList(!loadingPageLists));
            }}><small><ReloadOutlined size={5}/> change</small></a>
            </>)</>)}
        </>)}

      <ul className="gx-header-notifications gx-ml-auto">
        <li><Link to="/price">Gói cước</Link></li>
        <li><Link to="/app_lists">Bot App List</Link></li>
        <li className="gx-language">
          <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={languageMenu()}
                   trigger="click">
                <span className="gx-pointer gx-flex-row gx-align-items-center">
                  <i className={`flag flag-24 flag-${locale.icon}`}/>
                  <span className="gx-pl-2 gx-language-name">{locale.name}</span>
                  <i className="icon icon-chevron-down gx-pl-2"/>
                </span>
          </Popover>
        </li>
      </ul>
      <ModalPageLists callback={callback} deletePageClick={deletePageClick} onCancel={() => dispatch(openPageList(!loadingPageLists))} visible={loadingPageLists} connectPageClick={connectPageClick} pages={pages} />
    </Header>
  );
};

export default Topbar;

import { Button, Row, Col} from "antd";
import React, {useEffect} from "react";
import {ShoppingCartOutlined, PlusCircleOutlined}  from '@ant-design/icons'
//import IntlMessages from "util/IntlMessages";
import { useDispatch, useSelector } from "react-redux";
import {getMyApps, createBlankApp, setAppIdLocation} from '../../appRedux/actions/AppBot'
import AppItem from './AppItem'


const App = (props) => {
  const {app_lists} = useSelector(({app_bot}) => app_bot)

  const {authUser} = useSelector(({auth}) => auth)

  const dispatch = useDispatch()

  const createBlankAppClick = () => {
    dispatch(createBlankApp(authUser._id));
  }
  useEffect(() => {
    dispatch(getMyApps(authUser._id))
    dispatch(setAppIdLocation(null))
  }, [dispatch, authUser])
  return (
    <>
        <Row>
          <Col>
            <Button icon={<ShoppingCartOutlined />} type="primary" target="_blank" href="http://botfb.shop">Shop App</Button>
            <Button icon={<PlusCircleOutlined/>} type="dashed" onClick={createBlankAppClick}>Blank App</Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Row gutter={8}>
            {app_lists.length > 0 && app_lists.map((app, k) => <Col span={6} key={k}>
                    <AppItem app={app} {...props} />
                  </Col>)}
            </Row>
          </Col>
        </Row>
    </>
  );
};

export default App;

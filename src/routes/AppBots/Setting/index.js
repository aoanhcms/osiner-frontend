import React from 'react'
//import IntlMessages from '../../../util/IntlMessages'
import {Global, Role, InfoAppBot, TokenApi, WhitelistDomain} from './Components'

import {Row, Col, Card} from 'antd'
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const StyleCard = {
  marginBottom: 5
}

const Setting = () => {

  const {appbot_data} = useSelector(({app_bot}) => app_bot)
  return (<>
    <Row gutter={[5, 1]}>
      <Col span={12}>
        <Card style={StyleCard} title="AppBot Info" size="small"
          extra={<><span>Upgrade</span>|
          <span><ShoppingCartOutlined/> Sell</span>|
          <span><DeleteOutlined/>Delete</span></>}>
          <InfoAppBot appbot={appbot_data} />
        </Card>
        <Card title="Global" size="small">
          <Global />
        </Card>
      </Col>
      <Col span={12}>
        <Card style={StyleCard} title="Employer" size="small">
          <Role roles={appbot_data.roles} />
        </Card>
        <Card style={StyleCard} title="Info Api" size="small">
          <TokenApi />
        </Card>
        <Card style={StyleCard} title="Whitelist Domain" size="small">
          <WhitelistDomain domains={[
            "https://osiner.com"
          ]}/>
        </Card>
      </Col>
    </Row>
  </>)
}
export default Setting

import { EditOutlined } from '@ant-design/icons';
import { Col, Row, Switch } from 'antd';
import React from 'react';

const StyleRowBottom = {
  marginBottom: 5
}

export const InfoAppBot = ({appbot}) => {
  return (<Row>
    <Col span={24}>
      <Row style={StyleRowBottom}>
        <Col span={5}>ID</Col>
        <Col span={19}>{appbot._id}</Col>
      </Row>
      <Row style={StyleRowBottom}>
        <Col span={5}>Name</Col>
        <Col span={19}>{appbot.name}<a><EditOutlined/></a></Col>
      </Row>
      <Row style={StyleRowBottom}>
        <Col span={5}>Status</Col>
        <Col span={19}><Switch>Change</Switch></Col>
      </Row>
    </Col>
  </Row>)
}

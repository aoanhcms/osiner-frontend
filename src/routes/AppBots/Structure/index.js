import { PlusCircleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React from 'react';
import ReactFlow from './components/FlowChart/Builder';
import { Block } from './components/Menu';
import {Nav} from './components/Nav'

const Structure = () => {
  return (<div className="gx-structure">
    <Row gutter={[1, 1]}>
      <Col span={6} className="gx-structure-menu">
        <Row gutter={[2, 1]}>
          <Col span={12}>
            <Block name="Wellcome" />
          </Col>
          <Col span={12}>
            <Block name="Default" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            Group
          </Col>
        </Row>
        <Row gutter={[2, 1]}>
          <Col span={12}>
            <Block name="Wellcome" />
          </Col>
          <Col span={12}>
            <Block name="Default" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <a><PlusCircleOutlined/> Tạo Group</a>
          </Col>
        </Row>
      </Col>
      <Col span={18}>
        <Nav/>
      </Col>
    </Row>
  </div>);
}
export default Structure

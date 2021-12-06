import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import React from 'react';

export const Role = ({roles}) => {
  return (<Row>
    <Col span={24}>
      <Row>
        <Col span={24}>
          {roles.length > 0 && roles.map(role => (<Row>
            <Col span={20}>
              Nhân viên
            </Col>
            <Col span={4}>
              <Button size="small" icon={<DeleteOutlined/>} type="danger"></Button>
            </Col>
          </Row>))}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button icon={<PlusCircleOutlined/>} type="dashed" size="small">New Employer</Button>
        </Col>
      </Row>
    </Col>
  </Row>)
}
export const RoleManage = () => {

}

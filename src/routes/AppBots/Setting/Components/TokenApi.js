import React from 'react';
import {Input, Button, Row, Col} from 'antd';
import { CopyOutlined, ReloadOutlined } from '@ant-design/icons';

export const TokenApi = () => {
  return (<Row gutter={2}>
    <Col span={16}>
      <Input />
    </Col>
    <Col span={5}>
      <Button type="primary" icon={<ReloadOutlined/>}></Button>
    </Col>
  </Row>)
}

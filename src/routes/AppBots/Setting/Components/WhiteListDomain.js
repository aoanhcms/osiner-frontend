import React from 'react';
import {Row, Col, Button} from 'antd';
import { DeleteOutlined, LinkOutlined, PlusCircleOutlined } from '@ant-design/icons';

export const WhitelistDomain = ({domains}) => {
  return (<Row>
    <Col span={24}>
      <Row>
        <Col span={24}>
          {domains.length > 0 && domains.map(domain => (<Row>
            <Col span={20}>
              {domain}<a><LinkOutlined/></a>
            </Col>
            <Col span={4}>
              <Button size="small" icon={<DeleteOutlined />} type="danger"></Button>
            </Col>
          </Row>))}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button icon={<PlusCircleOutlined />} type="dashed" size="small">Add Domain</Button>
        </Col>
      </Row>
    </Col>
  </Row>)
}

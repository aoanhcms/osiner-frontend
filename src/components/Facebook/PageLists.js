import React, {useEffect} from 'react';
import {Row, Col, Modal, Button} from 'antd'
import { FacebookLoginPermissionNav} from 'components/Facebook/FacebookLoginRender'
import {FACEBOOK_APP_ID} from 'util/config'

import {FacebookFilled, ReloadOutlined, LinkOutlined, PlusCircleOutlined, DeleteOutlined} from '@ant-design/icons'

export const ConnectPageBtn = ({callback, text = "Connect Page"}) => (<FacebookLoginPermissionNav
  appId={FACEBOOK_APP_ID}
  callback={callback}
  render={renderProps => (
    <a onClick={renderProps.onClick}><FacebookFilled /> {text}</a>
  )}/>)
  export const ModalPageLists = ({pages, callback, connectPageClick, visible=true, onCancel, deletePageClick}) => {
    return (<Modal visible={visible} footer={null} onCancel={onCancel}>
      <Row>
        <Col span={2}></Col>
        <Col>
          <ConnectPageBtn callback={callback} text="Reload" />
        </Col>
      </Row>
      <hr/>
      {pages.length > 0 && pages.map((page, kk) => {
        return (<Row key={kk}>
          <Col span={2} className="pageName"></Col>
          <Col span={17} className="pageName">
            {page.name} <a><LinkOutlined /></a>
          </Col>
          <Col span={5} className="pageAct">
            {page.page_id !== null ? <Button type="danger" size="small" icon={<DeleteOutlined />} onClick={() => deletePageClick(page._id)}>Delete</Button> : <Button size="small" icon={<LinkOutlined />} onClick={() => connectPageClick(page._id)}>Connect</Button>}

          </Col>
        </Row>)
      })}
      <Row>
        <Col span={2} className="pageName"></Col>
        <Col span={17} className="pageName">Create new Page</Col>
        <Col span={5} className="pageAct"><Button size="small" type="dashed" href="https://www.facebook.com/pages/creation/?ref_type=launch_point" target="_blank" icon={<PlusCircleOutlined />}>Create</Button></Col>
      </Row>
    </Modal>)
  }

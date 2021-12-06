import { Col, Row, Input, Switch } from "antd"

const {TextArea} = Input;

export const Global = () => {
  return (<>
  <Row>
    <Col span={7}>Lời chào:</Col>
    <Col span={17}><TextArea /></Col>
  </Row>
  <Row>
    <Col span={7}>Ẩn bình luận chứa số điện thoại:</Col>
    <Col span={17}><Switch ></Switch> </Col>
  </Row>
  <Row>
    <Col span={7}>Ẩn bình luận chứa Email:</Col>
    <Col span={17}><Switch ></Switch> </Col>
  </Row>
  </>)
}

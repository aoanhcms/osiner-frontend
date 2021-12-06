import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Select} from 'antd';

const UpdateInfo = (props) => {
  const continueButton = () => {
    //to app list

    props.history.push({pathname: '/app_lists'})
    console.log('redirect to app_lists');
  }
  useEffect(() => {
    props.history.push({pathname: '/app_lists'})
  }, [])
  const [Website, setWebsite] = useState("")
  const onChangeWebsite = (e) => {

  }
  const formTailLayout = {
    labelCol: {
      span: 14,
    },
    wrapperCol: {
      span: 8,
      offset: 4,
    },
  };
  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="vertical"
      >
        <Form.Item label="Website">
          <Input placeholder="" onChange={onChangeWebsite} value={Website}/>
        </Form.Item>
        <Form.Item label="Địa chỉ">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input placeholder=""/>
        </Form.Item>
        <Form.Item label="Lĩnh vực">
          <Select>
            <Select.Option value="1">1</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={continueButton}>Tiếp tục</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default UpdateInfo

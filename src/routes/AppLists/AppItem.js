import { Card, Avatar, Menu, Dropdown} from "antd";
import {CopyFilled, CopyOutlined, DeleteOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, ShoppingCartOutlined}  from '@ant-design/icons'

const { Meta } = Card;

const AppItem = ({app, history}) => {
  const ConnectAppBot = () => {
    //gửi 1 post
    history.push({pathname: `/id/${app._id}/setting`})
  }
  const MenuLists = () => {
    return (<Menu>
      <Menu.Item icon={<SettingOutlined/>}>
        <a target="_blank">
          Setting
        </a>
      </Menu.Item>
      <Menu.Item icon={<EditOutlined/>}>
        <a target="_blank">
          Rename
        </a>
      </Menu.Item>
      <Menu.Item icon={<CopyOutlined/>}>
        <a target="_blank">
          Clone
        </a>
      </Menu.Item>
      <Menu.Item icon={<ShoppingCartOutlined/>}>
        <a target="_blank">
          Sell
        </a>
      </Menu.Item>
      <Menu.Item danger icon={<DeleteOutlined/>}>Delete</Menu.Item>
    </Menu>)
  }
  return (<Card
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <div><a className="ant-dropdown-link" onClick={e => {
        e.preventDefault();
        ConnectAppBot()
      }}>
      <SettingOutlined /> Connect
    </a></div>,
      <Dropdown overlay={MenuLists}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <EllipsisOutlined />
        </a>
      </Dropdown>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title={app.name}
      description="This is the description"
    />
  </Card>)
}
export default AppItem;

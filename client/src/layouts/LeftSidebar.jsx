import React from 'react';
import Icon from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import ClickOutHandler from 'react-onclickout';
import $ from 'jquery';

const { Sider } = Layout;
const { SubMenu } = Menu;

const LeftSidebarPanel = (props) => {
  const onClickOut = (e) => {
    $('body').removeClass('mobile-sider');
  };
  const sidebarMenu = props.menu.map((menu) => {
    if (menu.sub) {
      return (
        <SubMenu
          key={menu.key}
          title={
            <span>
              <Icon className="" component={() => <img alt="submenu-hideon" src={menu.icon} />} />
              {/* <Icon className="d-none hover-icon" component={() => <img alt="submenu-d-none" src={menu.iconHover} />} /> */}
              <span>{menu.name}</span>
            </span>
          }
        >
          {menu.sub.map((sub) => {
            return (
              <Menu.Item key={sub.key}>
                <Link to={sub.path}>{sub.name}</Link>
              </Menu.Item>
            );
          })}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item className="height-60 d-flex align-items-center" key={menu.key}>
          <Icon className="" component={() => <img className="height-22 width-22"  alt="submenu-hideon" src={menu.icon} />} />
          {/* <Icon className="d-none hover-icon" component={() => <img alt="submenu-d-none" src={menu.iconHover} />} /> */}
          <Link to={menu.path}>
            <span>{menu.name}</span>
          </Link>
        </Menu.Item>
      );
    }
  });
  const defaultSelectedKey = () => {
    let retunKey = 'crm_cus_1';
    props.menu.forEach((item) => {
      if (item.sub) {
        item.sub.forEach((subItem) => {
          if (window.location.pathname === subItem.path) {
            retunKey = subItem.key;
          }
        });
      }
    });
    return [retunKey];
  };
  const defaultSelectedOpenKey = () => {
    let retunKey = 'crm_1';
    props.menu.forEach((item) => {
      if (item.sub) {
        item.sub.forEach((subItem) => {
          if (window.location.pathname === subItem.path) {
            retunKey = item.key;
          }
        });
      }
    });
    return [retunKey];
  };
  return (
    <ClickOutHandler onClickOut={onClickOut}>
      <Sider width="310" trigger={null} collapsible collapsed={props.isCollapsed}>
        <div className="logo">
          <Link to={``}>
            {/* <img className="expand" src={require('../assets/images/shipments.svg')} title="shrihari" alt="shrihari" /> */}
            <h3 className="expand" style={{color: '#fff'}}>SHRI HARI</h3>
          </Link>
          <Link to={``}>
            {/* <img className="collapsed" src={require('../assets/images/shipments.svg')} title="shrihari" alt="shrihari" /> */}
            <h3 className="collapsed" style={{color: '#fff'}}>SHRI HARI</h3>
          </Link>
        </div>
        <Menu className="mt-4" mode="inline" defaultSelectedKeys={defaultSelectedKey()} defaultOpenKeys={defaultSelectedOpenKey()}>
          {sidebarMenu}
        </Menu>
      </Sider>
    </ClickOutHandler>
  );
};

const LeftSidebar = React.memo(LeftSidebarPanel);

export default LeftSidebar;

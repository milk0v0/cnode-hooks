import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { indexNav } from '../../router';

export default function IndexNav(props) {
  const { selectedKeys } = props;
  return (
    <Menu className="index_nav" selectedKeys={[selectedKeys]} mode="horizontal">
      {indexNav.map(item => <Menu.Item key={item.to}>
        <Link to={item.to}>{item.txt}</Link>
      </Menu.Item>)}
    </Menu>
  )
}

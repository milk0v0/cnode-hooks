import { Affix, Col, Layout, Menu, Row } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { nav } from '../router';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <Affix
      offsetTop={0}
    >
      <Layout.Header id="header">
        <div className="wrap">
          <Row>
            <Col xs={6} sm={5} md={2}>
              <h1 className="logo">
                <Link to="/">logo</Link>
              </h1>
            </Col>
            <Col xs={18} sm={19} md={22}>
              <Menu
                mode="horizontal"
                theme="dark"
                selectedKeys={[pathname]}
              >
                {nav.map(item => <Menu.Item key={item.to}>
                  <Link to={item.to}>{item.txt}</Link>
                </Menu.Item>)}
              </Menu>
            </Col>
          </Row>
        </div>
      </Layout.Header>
    </Affix>
  )
}

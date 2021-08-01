import { Affix, Layout } from 'antd';
import React from 'react';

export default function Header() {
  return (
    <Affix
      offsetTop={0}
    >
      <Layout.Header>
        <div className="wrap"></div>
      </Layout.Header>
    </Affix>
  )
}

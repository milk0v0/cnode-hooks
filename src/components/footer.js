import { Affix, Layout } from 'antd'
import React from 'react'

export default function Footer() {
  return (
    <Affix offsetBottom={0}>
      <Layout.Footer id="footer">
        <p className="wrap">社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
      </Layout.Footer>
    </Affix>
  )
}

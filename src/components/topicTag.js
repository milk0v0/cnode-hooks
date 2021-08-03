import { Tag } from "antd";
import React from 'react';

function setTag(tab, className) {
  switch (tab) {
    case "top":
      return <Tag color="#87d068" className={className}>置顶</Tag>
    case "good":
      return <Tag color="#f50" className={className}>精华</Tag>
    case "share":
      return <Tag color="green" className={className}>分享</Tag>
    case "ask":
      return <Tag color="gold" className={className}>问答</Tag>
    case "job":
      return <Tag color="blue" className={className}>招聘</Tag>
    case "dev":
      return <Tag color="purple" className={className}>测试</Tag>
    default:
      return null
  }
}

export default function TopicTag(props) {
  const { tab, className } = props;
  return setTag(tab, className);
}

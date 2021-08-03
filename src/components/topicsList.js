import { List } from 'antd';
import React from 'react';

export default function TopicsList(props) {
  const { loading, datas } = props;
  return (
    <List
      className="topics_list"
      loading={loading}
      dataSource={datas}
      renderItem={(data) => <List.Item>{11}</List.Item>}
    />
  )
}

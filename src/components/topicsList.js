import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, List } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import FromNow from './fromNow';
import TopicTag from './topicTag';

export default function TopicsList(props) {
  const { loading, datas } = props;
  return (
    <List
      className="topics_list"
      loading={loading}
      dataSource={datas}
      renderItem={(data) => {
        const { author, good, id, last_reply_at, tab, title, top } = data;
        const { avatar_url, loginname } = author;
        return (
          <List.Item>
            <Col xs={3} sm={2} md={2} lg={1}>
              <Link to={`/user/${loginname}`}>
                <Avatar
                  icon={<UserOutlined />}
                  src={avatar_url}
                  title={loginname}
                />
              </Link>
            </Col>
            <Col xs={21} sm={22} md={18} lg={19}>
              <TopicTag
                tab={top ? 'top' : (good ? 'good' : tab)}
                className="topic-tag"
              />
              <Link to={`/topics/${id}`}>{title}</Link>
            </Col>
            <Col xs={0} md={4} className="from_now">
              {FromNow(last_reply_at)}
            </Col>
          </List.Item>
        )
      }}
    />
  )
}

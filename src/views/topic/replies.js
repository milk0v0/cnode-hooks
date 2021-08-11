import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Comment, List } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import FromNow from '../../components/fromNow';

export default function Replies(props) {
  const { loading, data = [] } = props;
  data.reverse();

  return (
    <Card
      title="评论列表"
      loading={loading}
    >
      <List
        dataSource={data}
        renderItem={item => {
          const { author, content, create_at } = item;
          const { loginname, avatar_url } = author;
          return <List.Item>
            <Comment
              author={<Link to={`/user/${loginname}`}>{loginname}</Link>}
              avatar={<Avatar
                icon={<UserOutlined />}
                src={avatar_url}
                title={loginname}
              />}
              content={<div dangerouslySetInnerHTML={{
                __html: content
              }}></div>}
              datetime={<time>发表于：{FromNow(create_at)}</time>}
            />
          </List.Item>
        }}
        pagination={{
          hideOnSinglePage: true,
          defaultCurrent: 1,
          defaultPageSize: 20,
          showSizeChanger: false
        }}
      />
    </Card>
  )
}

import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import FromNow from '../../components/fromNow';
import TopicTag from '../../components/topicTag';

export default function Details(props) {
  const { loading, data } = props;
  const { author, content, create_at, good, tab, title, top, visit_count } = data;

  return (
    <Card
      bordered
      type="inner"
      loading={loading}
      title={(
        <>
          <h1><TopicTag tab={top ? 'top' : (good ? 'good' : tab)} /></h1>
          <p>
            <Link to={`/user/${author.loginname}`}>{author.loginname}</Link> -
            创建时间：{FromNow(create_at)} -
            浏览人数：{visit_count}
          </p>
        </>
      )}
    >
      <div dangerouslySetInnerHTML={{
        __html: content
      }}></div>
    </Card>
  )
}

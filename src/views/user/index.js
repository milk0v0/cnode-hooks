import { Card } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TopicsList from '../../components/topicsList';
import { useUser } from '../../store/action';
import UserDetails from './userDetails';

export default function UserPage() {
  const { loginname } = useParams();
  const getData = useUser();
  const { data, loading } = useSelector(state => state.user);
  const { recent_replies = [], recent_topics = [], avatar_url, create_at, githubUsername, score } = data;

  useEffect(() => {
    getData(loginname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginname]);

  return (
    <div className="user_page">
      <Card
        loading={loading}
        className="user-details"
      >
        <UserDetails
          data={{ avatar_url, create_at, githubUsername, score, loginname }}
        />
      </Card>
      <Card
        loading={loading}
        title="最近创建的话题"
        type="inner"
      >
        <TopicsList
          loading={loading}
          datas={recent_replies}
        />
      </Card>
      <Card
        loading={loading}
        title="最近参与的话题"
        type="inner"
      >
        <TopicsList
          loading={loading}
          datas={recent_topics}
        />
      </Card>
    </div>
  )
}

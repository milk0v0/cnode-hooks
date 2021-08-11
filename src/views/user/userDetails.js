import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';
import FromNow from '../../components/fromNow';

export default function UserDetails(props) {
  const { avatar_url, create_at, githubUsername, score, loginname } = props.data;
  console.log(props);

  return (
    <>
      <Avatar
        size={80}
        icon={<UserOutlined />}
        src={avatar_url}
      />
      <p style={{ marginTop: 20 }}>
        用户名：{loginname} -
        注册时间：{FromNow(create_at)} -
        积分：{score}
      </p>
      {githubUsername && <p>
        github：<a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">{`https//github.com/${githubUsername}`}</a>
      </p>}
    </>
  )
}

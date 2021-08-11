import { Alert } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useTopic } from '../../store/action';
import Details from './details';
import Replies from './replies';

export default function TopicPage() {
  const { loading, data, isError, err_msg } = useSelector(state => state.topic);
  const { id } = useParams();
  const getData = useTopic();
  const { goBack } = useHistory();

  useEffect(() => {
    getData(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="topic">
      {isError ? <Alert
        message="请求异常"
        description={
          <>
            <div>{err_msg}</div>
            <div>点击关闭按钮返回上一步</div>
          </>
        }
        type="error"
        showIcon
        closable
        afterClose={() => {
          goBack();
        }}
      /> : <>
        <Details
          loading={loading}
          data={data}
        />
        <Replies
          loading={loading}
          data={data.replies}
        />
      </>}
    </div>
  )
}

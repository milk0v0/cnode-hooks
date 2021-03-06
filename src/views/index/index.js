import qs from 'qs';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TopicsList from '../../components/topicsList';
import { useTopicsList } from '../../store/action';
import IndexNav from './indexNav';
import IndexPagination from './indexPagination';

export default function IndexPage(props) {
  const { location } = props;
  const { search } = location;
  const { tab, page } = qs.parse(search.substr(1));

  const { data, loading } = useSelector(state => state.topics);
  const getData = useTopicsList();

  useEffect(() => {
    getData(tab, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, page])

  return (
    <>
      <IndexNav selectedKeys={`/?tab=${tab || 'all'}`} />
      <TopicsList
        loading={loading}
        datas={data}
      />
      <IndexPagination />
    </>
  )
}

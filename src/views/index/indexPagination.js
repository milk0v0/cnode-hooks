import { Pagination } from 'antd';
import qs from 'qs';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default function IndexPagination() {
  const { push } = useHistory();
  const { search } = useLocation();
  const { tab = 'all', page = 1 } = qs.parse(search.substr(1));
  return (
    <div className="index-pagination">
      <Pagination
        key={page}
        defaultCurrent={page}
        defaultPageSize={20}
        showSizeChanger={false}
        total={1000}
        onChange={page => {
          push(`./?tab=${tab}&page=${page}`)
        }}
      />
    </div>
  )
}

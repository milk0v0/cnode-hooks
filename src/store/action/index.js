import axios from 'axios';
import { useDispatch } from 'react-redux';
const http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
});

// 获取主题列表数据
function useTopicsList() {
  const dispatch = useDispatch();
  return async (tab = 'all', page = 1, limit = 20, mdrender = true) => {
    dispatch({ type: 'TOPICS_LOADING' });
    const res = await http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`);
    dispatch({ type: 'TOPICS_LOADOVER', data: res.data.data });
  }
}

export { useTopicsList };


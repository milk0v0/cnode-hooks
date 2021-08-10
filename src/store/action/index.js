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
    document.documentElement.scrollTop = 0;
    const res = await http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`);
    dispatch({ type: 'TOPICS_LOADOVER', data: res.data.data });
  }
}

// 获取主题详情
function useTopic() {
  const dispatch = useDispatch();
  return async (id) => {
    dispatch({ type: 'TOPIC_LOADING' });
    document.documentElement.scrollTop = 0;

    try {
      const res = await http.get(`/topic/${id}`);
      dispatch({ type: 'TOPIC_LOADOVER', data: res.data.data });
    } catch (error) {
      dispatch({ type: 'TOPIC_ERROR', err_msg: error.response.data.error_msg });
    }

  }
}

export { useTopicsList, useTopic };


export default function topic(topic = {
  loading: true,
  data: {},
  isError: false,
  err_msg: ''
}, action) {
  switch (action.type) {
    case 'TOPIC_LOADING':
      return {
        ...topic,
        loading: true,
        data: {},
        isError: false,
        err_msg: ''
      }
    case 'TOPIC_LOADOVER':
      return {
        ...topic,
        loading: false,
        data: action.data
      }
    case 'TOPIC_ERROR':
      return {
        ...topic,
        loading: false,
        data: {},
        isError: true,
        err_msg: action.err_msg
      }
    default:
      return topic
  }
}
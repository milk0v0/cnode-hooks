export default function topics(topics = {
  loading: true,
  data: []
}, action) {
  switch (action.type) {
    case 'TOPICS_LOADING':
      return {
        ...topics
      }
    case 'TOPICS_LOADOVER':
      return {
        ...topics,
        loading: false,
        data: action.data
      }
    default:
      return topics
  }
}
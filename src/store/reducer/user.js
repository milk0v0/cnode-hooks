export default function user(user = {
  loading: true,
  data: {}
}, action) {
  switch (action.type) {
    case 'USER_LOADING':
      return {
        ...user,
        loading: true,
        data: {}
      }
    case 'USER_LOADOVER':
      return {
        ...user,
        loading: false,
        data: action.data
      }
    default:
      return user
  }
}
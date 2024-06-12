import http from '@/utils/http'

export const getMessageListAPI = (userID) => {
  return http(
    {
      url: 'message/getMessageList',
      method: 'GET',
      params: { userID }
    }
  )
}
import http from "@/utils/http";

export const sendCodeAPI = (mail) => {
  return http({
    url: '/sendCode',
    method: 'POST',
    params: {
      mail
    },
  })
}

export const registerAPI = ({ email, code }) => {
  return http({
    url: '/register',
    method: 'POST',
    data: {
      email,
      code
    }
  })
}

export const loginAPI = ({ email, password }) => {
  return http({
    url: '/login',
    method: 'POST',
    data: {
      email,
      password
    }
  })
}
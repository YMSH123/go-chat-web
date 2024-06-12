import http from "@/utils/http";

export const ping = () => {
  return http({
    url: '/ping',
    method: 'GET'
  })
}
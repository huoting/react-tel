import request from '../utils/request'

export function Login(query) {
  return request(
    {
      url: `/json.json`,
      method: 'get',
      query
    }
  )
}
// export function Login(query) {
//   return 123456
// }
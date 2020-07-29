import axios from 'axios';

export const fetchUsers = () => {
  return axios.get(`/users`)
  .then(res => res.data.data)
}

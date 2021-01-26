import axios from 'axios';

export const getContact = (params) => {
    return axios.get("https://randomuser.me/api?results=5&exc=login%2Cregistered%2Cid%2Cnat&nat=us&noinfo", {})
    .then(res => res.data)
}
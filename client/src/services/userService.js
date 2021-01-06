/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  getAll: async () => {
    const res = await axios.get(`/api/bootcamp`);
    console.log("getAll")
    return res.data || [];
  },
};

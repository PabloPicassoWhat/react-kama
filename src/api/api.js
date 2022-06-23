import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "bbd8e203-12f7-4e49-bdd1-015fcb627921"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  }
};

export const followAPI = {
  getUnfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
  getFollow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  }
};

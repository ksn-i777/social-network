import axios from 'axios';

export const commonAxiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const authAPI = {
    getAuthUser() {
        return commonAxiosInstance.get(`auth/me`).then(res => res.data)
    },
}

export const usersAPI = {
    getUsers(currentPage:number, pageSize:number) {
        return commonAxiosInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    createFollow(id: string) {
        return commonAxiosInstance.post(`follow/${id}`, {}).then(res => res.data)
    },
    deleteFollow(id: string) {
        return commonAxiosInstance.delete(`follow/${id}`).then(res => res.data)
    },
}

export const profileAPI = {
    getProfile(id:number) {
        return commonAxiosInstance.get(`profile/${id}`).then(res => res.data)
    },
    getProfileStatus(id:number) {
        return commonAxiosInstance.get(`profile/status/${id}`).then(res => res)
    },
    updateProfileStatus(newStatus:string) {
        debugger
        return commonAxiosInstance.put(`status`, {status: newStatus}).then(res => res.data)
    },
}
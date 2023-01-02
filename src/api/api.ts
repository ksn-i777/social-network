import axios from 'axios';

export const commonAxiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2747a036-30e1-438f-a28d-363ba79ced59' 
    }
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
        return commonAxiosInstance.put(`profile/status`, {status: newStatus}).then(res => res.data)
    },
}
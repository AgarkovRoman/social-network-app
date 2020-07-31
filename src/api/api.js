import * as axios from 'axios'
import { savePhotoSuccess } from '../redux/profile-reducer'

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'c01eb349-ca08-458d-ae9f-fcf16b45f5fc'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        console.warn('Old method. Please use profileAPI')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return axiosInstance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return axiosInstance.put(`profile/status`, { status })
    },
    savePhoto(photo) {
        const formData = new FormData();
        formData.append('image', photo)
        return axiosInstance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const followAPI = {
    followUsers(id) {
        return axiosInstance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUsers(id) {
        return axiosInstance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    getAuthMe() {
        return axiosInstance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe = false) {
        return axiosInstance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return axiosInstance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptcha() {
        return axiosInstance.get(`security/get-captcha-url `)
            .then(response => {
                return response.data
            })
    },
}
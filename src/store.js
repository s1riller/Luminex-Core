
import axios from 'axios'
import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user : {}
    },
    mutations: {

    },
    actions: {
        login({commit}, user){
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'http://127.0.0.1:8000/auth/jwt/create/', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.token
                        console.log(token)
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        register({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({url: 'http://127.0.0.1:8000/auth/users/', data: user, method: 'POST'})
                    .then(resp => {
                        const token = resp.data.token
                        const user = resp.data.user
                        localStorage.setItem('token', token)
                        axios.defaults.headers.common['Authorization'] = token
                        commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({commit}){
            return new Promise((resolve, reject) => {
                commit('logout')
                localStorage.removeItem('token')
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        },
    },
    getters : {

    }
})
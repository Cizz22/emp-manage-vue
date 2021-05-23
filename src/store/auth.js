import axios from 'axios'

export default{
namespaced : true,
    state: {
        token: null,
        user : null
    },

    getters: {
        authenticated(state) {
            return state.token && state.user
        },
        user(state){
            return state.user
        }
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        },
        SET_USER(state, data){
            state.user = data
        }
    },
    actions: {
       async login( {dispatch} , credentials) {
        let res = await axios.post('/login', credentials)
           return dispatch('attempt', res.data.token)
       },

       async register({dispatch}, credentials){
           let res = await axios.post('register', credentials)
           return dispatch('attempt', res.data.token)
       },

       async attempt ( { commit, state } , token){
           if(token){
               commit('SET_TOKEN' , token)
           }

           if(!state.token){
               return
           }
            commit('SET_TOKEN', token)
            try {
            let res = await axios.get('/me')
            commit('SET_USER', res.data)
            } catch (error) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
       },

       signOut( {commit} ){
           return axios.post('/logout').then(() => {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
           })
       }
    }
}
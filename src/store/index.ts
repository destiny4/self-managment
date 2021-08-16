import {createStore} from 'vuex'
import login from './login'

const store=createStore({
    state: {
        test:'123'
    },
    mutations: {
        setTest(state,name){
            state.test=name
        }
    },
    actions: {
    },
    modules:{
       login
    }
})

export default store
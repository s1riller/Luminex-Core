import Vuex from 'vuex';
import typeFace from "@/store/modules/typeFace"; // Импортируйте Vue
import myModule from "@/store/modules/myModule";


const loadReactions = (time)=>{
    return  new Promise((resolve) =>{
        setTimeout(()=>{
            resolve('1234')
        },1000)
    } )
}
export default  new Vuex.Store({
    state:{
        reactions:[]
    },
    getters:{
        getReacions(state){
            return state.reactions
        }
    },
    mutations:{
       SET_REACTIONS(state, payload){
            state.reactions = payload
       }
    },
    actions:{
        async loadReactions({commit},payload){
            try {
                const reactions = await loadReactions(payload)
                commit('SET_REACTIONS', reactions)
                console.log(reactions)
            } catch (error) {
                console.error(error)
            }

        }
    }
});

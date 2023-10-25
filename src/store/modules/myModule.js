// store/modules/myModule.js

const state = {
    count: 0,
};

const mutations = {
    increment(state) {
        state.count++;
    },
};

const actions = {
    incrementAsync({ commit }) {
        setTimeout(() => {
            commit('increment');
        }, 1000);
    },
};

const getters = {
    doubleCount: (state) => state.count * 2,
};

export default {
    state,
    mutations,
    actions,
    getters,
};

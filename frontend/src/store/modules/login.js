const state = {
  user: 'guest',
}

const getters = {
  isLoggedIn: state => state.user !== 'guest',
  isAdmin: state => state.user === 'admin',
  user: state => state.user,
}

const actions = {
  setUser({ commit }, user) {
    commit('login', user);
  },
}

const mutations = {
  login (state, user) {
    state.user = user;
  },
  logout (state) {
    state.user = 'guest';
  },
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}
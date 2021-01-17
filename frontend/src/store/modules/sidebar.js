const state = {
  showSidebar: true,
}

const getters = {
  showSidebar: state => state.showSidebar,
}

const actions = {
  toggleSidebar({ commit }) {
    commit('toggleSidebar');
  },
}

const mutations = {
  toggleSidebar (state) {
    state.showSidebar = !state.showSidebar;
  },
}

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations
}
import menus from '../../api/menus'

const state = {
  list: []
}

const getters = {}

const actions = {
  getList (context) {
    menus.getMenusList((data) => {
      context.commit('setList', data)
    })
  }
}

const mutations = {
  setList (state, data) {
    state.list = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

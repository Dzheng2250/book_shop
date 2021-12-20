import images from '../../api/images'

const state = {
  list: []
}

const getters = {}

const actions = {
  getList (context) {
    images.getImageList((data) => {
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

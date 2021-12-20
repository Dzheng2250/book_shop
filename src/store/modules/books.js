import books from '../../api/books'

const state = {
  list: [],
  book: [],
  bookinfo: []
}

const getters = {}

const actions = {
  getList (context, index) {
    books.getBooksList(index, (data) => {
      context.commit('setList', data)
    })
  },
  getbook (context) {
    books.getAllBookList((data) => {
      context.commit('setbookList', data)
    })
  },
  getbookInfo (context, index) {
    books.getBookInfo(index, (data) => {
      context.commit('setbookinfoList', data)
    })
  }
}

const mutations = {
  setList (state, data) {
    state.list = data
  },
  setbookList (state, data) {
    state.book = data
  },
  setbookinfoList (state, data) {
    state.bookinfo = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

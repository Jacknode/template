// import Vue from 'vue'
// import Vuex from 'vuex'

Vue.use(Vuex)



import app from './modules/app'
import user from './modules/user'
import food from './Food'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import getters from './getters'



const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    tagsView,
    permission,
    app,
    user,
    food
  },
  getters
});

export default store
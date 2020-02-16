import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Lista: [
      '2-UDLR-XT',
      '2-UXL-L',
      '2-T-T',
      '3-L-DT-DT',
      '3-XL-DT-DT',
      '4-L-L-L-L',
      '4-DL-DL-DL-DL',
      '6-DLR-DLR-DT-DT-DLR-DLR'
    ],
    llantas1: 0,
    puntos1: 0,
  },
  mutations: {
    sumarllantas(state) {
      state.llantas1++;
    }, sumarpuntos(state) {
      state.puntos1++;
    },
    llantasof(state) {
      state.llantas1=0;
    },
    puntosof(state) {
      state.puntos1=0;
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //List contiene las diferentes configuraciones para su debida representacion grafica 
    List: [
      '2-UDLR-XT',
      '2-UXL-L',
      '2-T-T',
      '3-L-DT-DT',
      '3-XL-DT-DT',
      '4-L-L-L-L',
      '4-DL-DL-DL-DL',
      '6-DLR-DLR-DT-DT-DLR-DLR'
    ],
    //rimsValue se usara para imprimir el valor correspondiente en cada llanta
    rimsValue: 0,
    //pointsValue se usara para imprimir el valor correspondiente de los puntos de apoyo
    pointsValue: 0,
  },
  mutations: {
    //addRims suma en 1 el valor actual de rimsValue
    addRims(state) {
      state.rimsValue++;
    }, 
    //addPoints suma en 1 el valor actual de pointValue
    addPoints(state) {
      state.pointsValue++;
    },
    //resetRims hace a rimsValue igual a 0
    resetRims(state) {
      state.rimsValue=0;
    },
    //resetPoints hace a pointsValue igual a 0 
    resetPoints(state) {
      state.pointsValue=0;
    }
  },
  actions: {
  },
  modules: {
  }
})

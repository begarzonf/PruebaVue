import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Lista:[
      '2-UDLR-XT',
      '2-UXL-L',
      '2-T-T',
      '3-L-DT-DT',
      '3-XL-DT-DT',
      '4-L-L-L-L',
      '4-DL-DL-DL-DL',
      '6-DLR-DLR-DT-DT-DLR-DLR'
    ],
    U: false,
    D: false,
    T: false,
    X: false,
    llantas: 1,
    Papoyo: 1,
    arrllantas: [],
    numllantas: 0,
    contador: 0,
  },
  mutations: {
    obteneritem(state,n){
      console.log(n)
      console.log("estoy en store")
      var a= new String(n)
      console.log(a)
      state.arrllantas=[];
      state.U= false;
      state.D= false;
      state.T= false;
      state.X= false;
      state.llantas=1;
      state.Papoyo=1;
      for(var i=0;i<a.length;i++){
          console.log(n[i])
          if(n[i]=="T"){
              state.T=true;
          }
          if(n[i]=="D"){
              state.D=true;
              state.llantas=2;
              console.log(state.D)
          }
          if(n[i]=="U"){
              state.U=true;
              state.Papoyo=2;
          }
          if(n[i]=="X"){
              state.X=true;
          }
      }
      state.numllantas=state.llantas*state.Papoyo;
      for(var j=1;j<=state.numllantas;j++){
          state.arrllantas.push(j);
      }
  }
  },
  actions: {
  },
  modules: {
  }
})

<template>
<!--Diagram.vue corresponde al componente encargado de crear la visualizacion adecuada de la string correspondiente -->
  <div class="background">
    <div class="background2" :style="{'height':(272*(number-1))+'px'}"></div>
    <!-- v-for encargado de crear la cantidad de ejes correspondientes-->
    <div v-for="items in dictionary" :key="items.id" class="axis">
      {{processString(items.string)}}
      <div :class="{'axis1':!T,'axis2':T}">
        <h1>E{{items.id+1}}</h1>
      </div>
      <div :class="{'bar1':!T,'bar2':T}">
        <div style="display: flex">
          <!-- v-for encargado de pintar los puntos de apoyo correspondientes a las configuracion del eje -->
          <div v-for="i in arrPoints" :key="i" :style="'margin:auto'">
            {{addPoints()}}
            <div class="support-point">
              <p style="transform: translateY(50%)">P{{pointsValue}}</p>
            </div>
            <div :class="{'line-support-point':!D,'line-support-point2':D}"></div>
          </div>
        </div>
        <div style="display: flex">
          <!-- v-for encargado de pintar las llantas correspondientes a las configuracion del eje -->
          <div v-for="j in arrRims" :key="j" :style="'margin:auto'">
            {{addRims()}}
            <div :class="{'rims':!X,'rims2':X}">
              <h1>{{rimsValue}}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    {{resetRims()}}{{resetPoints()}}
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import "@/sass/styles.sass";
export default {
  data() {
    return {
      // U, D, T, y X son variables booleanas utilizadas para verificar que tipo de caracteristicas
      // presentara cada uno de los ejes
      U: false,
      D: false,
      T: false,
      X: false,
      // rims y points son variables que se modificaras segun si D y U existen en el string correspondiente
      // esto con el fin de conocer el numero de llantas que van a existir en el eje
      rims: 1,
      points: 1,
      // arrRims y arrPoints seran arreglos de apoyo para crear los puntos de apoyo y llantas correspondientes
      // a cada configuracion
      arrRims: [],
      arrPoints: [],
      // numRims sera usado para guardar el numero de llantas total de cada eje
      numRims: 0,
    };
  },
  name: "Diagram",
  props: ["dictionary", "number"],
  computed: {
    //variables declaradas en el store de vuex
    ...mapState(["rimsValue", "pointsValue"])
  },
  methods: {
    //funciones declaradas en el store de vuex
    ...mapMutations(["addRims", "addPoints", "resetRims", "resetPoints"]),
    // proccesString es la funcion encargada de revisar la configuraion de los ejes letra por letra
    // cambiando los valores de T, D, U, X segun sea el caso y llenando los arreglos arrPoints y arrRims
    // con el fin de manejar adecuadamente la informacion brindada y de esta manera contruir
    // la visualizacion adecuada para cada uno de los ejes
    processString(items) {
      // newStr es una variable de apoyo para leer de manera correcta el string entrante
      var newStr = new String(items);
      this.arrPoints = [];
      this.arrRims = [];
      this.U = false;
      this.D = false;
      this.T = false;
      this.X = false;
      this.rims = 1;
      this.points = 1;
      for (var i = 0; i < newStr.length; i++) {
        if (items[i] == "T") {
          this.T = true;
        }
        if (items[i] == "D") {
          this.D = true;
          this.rims = 2;
        }
        if (items[i] == "U") {
          this.U = true;
          this.points = 2;
        }
        if (items[i] == "X") {
          this.X = true;
        }
      }
      this.numRims = this.rims * this.points;
      for (var j = 1; j <= this.numRims; j++) {
        this.arrRims.push(j);
      }
      for (var k = 1; k <= this.points; k++) {
        this.arrPoints.push(k);
      }
    }
  }
};
</script>
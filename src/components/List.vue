<template>
<!--List.vue es un componente encargado de recibir la lista de configuraciones desde el store de vuex y
    y mediante un click en unos de estas configuraciones se les transmite al componente Diagram.vue la
    configuracion correspondiente en forma de diccionario -->
    <div>
        <div >
        <ul class='list-cage'>
            <!-- v-for encargado de listar todas las configuraciones y llamar a makeDictionary al momento
                de hacer click en cualquiera de las configuraciones-->
            <li v-for="item of List" :key="item" @click="makeDictionary(item)">
                {{item}}
            </li>

        </ul>
        </div>
        <div class="diagram-cage">
            <!--LLamada al componete Diagram.vue en el cual se le transmiten el diccionario correspondiente
                como el numero de ejes correspondientes-->
            <Diagram :dictionary="array2" :number="number"></Diagram>
        </div>
    </div>

</template>

<script>
import Diagram from './Diagram.vue'
import '@/sass/styles.sass'
import {mapState} from 'vuex';
export default {
    data(){
        return{
            //array en un arreglo de apoyo que se usa para realizar el diccionario array2
            array: [],
            //number se usa para enviar el numero de ejes que tambien corresponde a la longitud
            //de el diccionario array2
            number: 0,
            //array2 es un diccionario el cual sera transmitido a el componente Diagram.vue
            //es un diccionario para poder manejar de manera optima la informacion en el componente Diagram.vue
            array2:[]

        }
    },
    
    name: 'List',
    components: {
        Diagram
    },
    computed: {
        ...mapState(['List'])
    },
    methods:{
        //makeDictionary es la funcion encargada de eliminar el numero y los "-" de las configuracion inicial
        //creando un diccionario de cada una de las configuraciones de los ejes respectivos y asignandoles un id
        makeDictionary(string){
            this.array2=[];
            this.array=string.split("-");
            this.array.reverse();
            this.array.pop();
            this.array.reverse();
            this.number=this.array.length;
            for(var i=0;i<this.number;i++){
                this.array2.push({id:i,string:this.array[i]})
            }
        }

    }

}
</script>
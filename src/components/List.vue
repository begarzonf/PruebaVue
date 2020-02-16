<template>
    <div class="fondo3">
        <div >
        <ul class='list-cage'>
            <li v-for="item of Lista" :key="item" @click="pasarString(item)">
                {{item}}
            </li>

        </ul>
        </div>
        <div class="diagram-cage">
            <Diagrama :cadena="array2" :numero="numero"></Diagrama>
        </div>
    </div>

</template>

<script>
import Diagrama from './Diagrama.vue'
import '@/sass/styles.sass'
import {mapState} from 'vuex';
export default {
    data(){
        return{
            array: [],
            numero: 0,
            array2:[]

        }
    },
    
    name: 'List',
    components: {
        Diagrama
    },
    computed: {
        ...mapState(['Lista'])
    },
    methods:{
        pasarString (string){
            this.array2=[];
            this.array=string.split("-");
            this.array.reverse();
            this.array.pop();
            this.array.reverse();
            this.numero=this.array.length;
            for(var i=0;i<this.numero;i++){
                this.array2.push({id:i,string:this.array[i]})
            }
        }

    }

}
</script>
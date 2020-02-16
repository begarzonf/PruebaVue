<template>
    <div class="Fondo">
        <div class="Fondo2" :style="{'height':(numero*20)+'%'}" ></div>
        <div v-for="items in cadena" :key="items.id" class="Eje">
            {{obteneritems(items.string)}}
            <div :class="{'eje1':!T,'eje2':T}">
                <h1>E{{items.id+1}}</h1>
            </div>
            <div :class="{'bar1':!T,'bar2':T}">
                <div v-for="numero in arrllantas" :key="numero" :style="'margin:auto'">
                    <div :class="{'llanta':!X,'llanta2':X}">
                        <h1>{{numero}}</h1>
                    </div>
                    <div class="circulo">
                        <p>P{{numero}}</p>
                    </div>
                    <div class="cuadrado">
                    </div>
                    -->
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
import '@/sass/styles.sass'
export default {
    data(){
        return{
            U: false,
            D: false,
            T: false,
            X: false,
            llantas: 1,
            Papoyo: 1,
            arrllantas: [],
            arrPuntos: [],
            numllantas: 0,
            contador: 1,

        }
    },
    name: 'Diagrama',
    props: ['cadena','numero'],
    methods:{
        ...mapMutations(['obteneritem']),
        prueba(){
            console.log("asd")
        },
        obteneritems(items){
            var a= new String(items)
            this.arrPuntos=[];
            this.arrllantas=[];
            this.U= false;
            this.D= false;
            this.T= false;
            this.X= false;
            this.llantas=1;
            this.Papoyo=1;
            for(var i=0;i<a.length;i++){
                if(items[i]=="T"){
                    this.T=true;
                }
                if(items[i]=="D"){
                    this.D=true;
                    this.llantas=2;
                }
                if(items[i]=="U"){
                    this.U=true;
                    this.Papoyo=2;
                }
                if(items[i]=="X"){
                    this.X=true;
                }
            }
            this.numllantas=this.llantas*this.Papoyo;
            for(var j=1;j<=this.numllantas;j++){
                this.arrllantas.push(j);
            }
            for(var k=1;k<=this.Papoyo;k++){
                this.arrPuntos.push(k);
            }
        }

    }
}
</script>
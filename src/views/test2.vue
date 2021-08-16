<template>
    <div class="test2">
        <h1 class="text-red-500 text-4xl text-center">Recuperer tous les cours via GET</h1>
        <!-- {{ datas }} -->


        <div class="border border-black" v-for="data in datas" :key="data.id">

            <div class="my-8"> Nom du cours : {{ data.nom }}  </div>
            <div class="my-8"> Contenu : {{ data.contenu }} </div>
            <div class="my-8"> Auteur : {{ data.auteur }} </div>

        </div>

    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        data(){
            return {
                res: null,
                datas: null
            }
        },
        mounted(){
            axios.defaults.headers.get['Content-Type'] = 'application/json';
            axios.get('https://127.0.0.1:8000/api/cours')
                .then(res =>{
                    this.res = res;
                    this.datas = this.res.data['hydra:member']
                    console.log(this.data)
                } )

        }
    }
</script>

<style lang="css" scoped>

</style>
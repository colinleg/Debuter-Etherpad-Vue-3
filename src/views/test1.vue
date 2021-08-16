<template>
    <div class="test1">
        <h1 class="text-red-500 text-2xl text-center">Envoyer une requête POST via axios </h1>
        <form class="flex flex-col ml-8">
            <h2 class="text-xl font-bold"> Creer un cours </h2>

            <label for="nom"> Nom du cours</label>
            <input type="text" id="nom" name="nom" class="border border-gray-400 rounded-lg w-1/4 ml-4 p-2">

            <label for="contenu">Contenu du cours</label>
            <textarea name="contenu" id="contenu" cols="30" rows="10" class=" border border-gray-400 rounded-lg w-1/2 ml-4 p-2"></textarea>

            <label for="auteur">Auteur</label>
            <input type="text" id="auteur" name="auteur" class="border border-gray-400 rounded-lg w-1/4 ml-4 p-2">
        </form>

        <button @click="sendRequest" class="rounded-lg border border-gray-500 bg-red-200 mt-8 ml-4 p-2"> Envoyer la requête </button>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        data(){

        },
        methods : {
            sendRequest(){
                let nomValue = document.querySelector('#nom').value;
                let contenuValue = document.querySelector('#contenu').value;
                let auteurValue = document.querySelector('#auteur').value;

                let data = {
                    'nom': nomValue,
                    'contenu': contenuValue,
                    'auteur': auteurValue
                }
                console.log(data);

                axios.post('https://127.0.0.1:8000/api/cours', data)
                    .then(res => console.log(res))
            }
        },
        mounted(){

        }
    }
</script>

<style lang="css" scoped>

</style>
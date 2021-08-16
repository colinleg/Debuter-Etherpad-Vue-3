<template>
  <div id="nav">
    <router-link to="/test1">Test n°1 : Insérer un cours avec Axios </router-link><br />
    <router-link to="/test2">Test n°2 : Recuperer tous les cours via GET</router-link><br />
    <router-link to="/test3">Test n°3 : </router-link><br />
    <router-link to="/test4">Test n°4 : </router-link><br />
    <router-link to="/test5">Test n°5 : </router-link><br />
    <router-link to="/test6">Test n°6 : </router-link>
  </div>
  <router-view/>
</template>

<script>


export default {
  data(){
    return {

    }
  },

}
</script>
<style scoped>
#nav{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: start;
  margin-left: 5rem;
}

a{
  margin-top: 10px;
  color: black;
  text-decoration: none;
  font-size: 1.6em;
}
</style>

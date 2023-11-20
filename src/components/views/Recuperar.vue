<template>
  <h1>Recuperar senha</h1>
  <input type="email" placeholder="Email" v-model="email">
  <button @click="recupear">Recuperar</button>
</template>

<script>
import firebase from "firebase"
export default {
name:"Recuperar"
,data() {
  return {
    email:''
    
  }
},methods: {
  recupear(){
    firebase
    .auth().sendPasswordResetEmail(this.email)
    .then(() =>{
      alert("Email de recuperação enviado!")
    },(() =>{
      alert("Email não enviado!")
    }))
  }
},
}
</script>

<style scoped>
*{
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
}
</style>
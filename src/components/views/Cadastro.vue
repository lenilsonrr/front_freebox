<template>
    <h1>CADASTRAR</h1>
    <div>
        <img src="../imgs/login.png" alt="Imagem login">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Senha" v-model="senha">
        <button @click="cadastrar">Cadastrar</button>
        <p>Já tem cadastro? <router-link class="link" to="/login">Login</router-link></p>
    </div>
</template>
  
<script>
import firebase from 'firebase'
export default {
    name: "Cadastro",
    data() {
        return {
            email: "",
            senha: "",
            initials: ""
        }
    }, methods: {
        cadastrar() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.senha)
                .then((user) => {
                    this.$router.push("/login")
                    console.log(user)
                }, (err) => {
                    alert(err)
                }
                )
        }
    },

}
</script>
  
<style scoped>
* {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    margin-top: 30px;
    color: #fff;
    width: 90%;
    border-bottom: 2px solid #000;
    max-width: 450px;
    font-weight: bold;
}

div {
    background: #FC7A00;
    padding: 30px;
    display: flex;
    width: 90%;
    flex-direction: column;
    margin-top: 50px;
    border-radius: 30px;
    max-width: 450px;
}

img {
    width: 150px;
    background: #FC7A00;
}

input {
    background: #fff;
    outline: none;
    border: none;
    border-radius: 30px;
    width: 80%;
    margin-bottom: 30px;
}

button {
    border: none;
    width: 70%;
    border-radius: 30px;
    transition: 200ms;
    color: #fff;
    margin-bottom: 10px;
    padding: 5px;
}

button:hover {
    transform: scale(1.1);
}

.link {
    background: #FC7A00;
}

p {
    background: #FC7A00;
}
</style>
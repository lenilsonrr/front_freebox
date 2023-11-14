<template>
  <div class="login-box">
    <input type="text" placeholder="email" v-model="login">
    <input type="password" placeholder="senha" v-model="senha">
    <BotaoVue nome="Logar" @click="fazerLogin" />
    <a href="" class="esqueci">Esqueci a senha</a>
    <span>{{ mensagemErro }}</span>
    <p v-for="(l, i) in lojistas" :key="i">
      <span>{{ l.nome }}</span>
      <span>{{ l.senha }}</span>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
import BotaoVue from '../util/Botao.vue';

export default {
  name: 'Login',
  components: {
    BotaoVue,
  },
  data() {
    return {
      login: '',
      senha: '',
      mensagemErro: '',
      lojistas: []
    };
  }, mounted() {
    this.getLojistas()
  },
  methods: {
    fazerLogin() {
      let encontrouCorrespondencia = false;

      for (let i = 0; i < this.lojistas.length; i++) {
        if (this.login === this.lojistas[i].nome && this.senha === this.lojistas[i].senha) {
          encontrouCorrespondencia = true;
          break;  // Termina o loop, já que encontrou uma correspondência
        }
      }

      if (encontrouCorrespondencia) {
        alert("Login bem-sucedido!");
      } else {
        alert("Login ou senha incorretos.");
      }
    }
    ,
    getLojistas() {
      axios({
        method: 'GET',
        url: 'http://localhost:8080/lojistas',
        responseType: 'json'
      })
        .then((response) => {
          this.lojistas = response.data.content;
          console.log(response.data.content)
        });
    }
  }
};
</script>

<style>
.login-box {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  background: #fff;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.esqueci {
  color: #000;
  background: white;
  display: flex;
  width: 125px;
  align-items: center;
  text-align: center;
  border-radius: 30px;
  justify-content: center;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.login-box input {
  background: rgb(223, 222, 222);
  outline: none;
  border: none;
  margin: 10px;
  height: 30px;
  width: 100%;
  text-align: center;
  border-radius: 30px;
}

.login-box span {
  color: red;
  margin-top: 10px;
}
</style>

<template>
  <div>
    <h1 class="titulo-home">FREE BOX</h1>
    <div class="entradas">
      <div class="home-login">
        <img src="../imgs/login.png" alt="imagem login">
        <h3>LOJISTA</h3>
      </div>
      <!-- <div class="home-fornecedor">
        <a href="/fornecedor"><img src="../imgs/caminhao.png" alt="imagem fornecedor"></a>
        <span>FORNECEDOR</span>
      </div>-->
    </div>
    <router-link class="home-btn_cadastro" to="/login">Login</router-link>
    <router-link class="home-btn_cadastro" to="/cadastro">Cadastre-se agora!</router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
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
  color: white;
  border-bottom: 2px solid #000;
  width: 90%;
  max-width: 450px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-weight: 900;
  margin-left: auto;
  margin-right: auto;
}

.entradas {
  margin-top: 72px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: black;
}

.home-login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-fornecedor {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-login img {
  width: 150px;
}

.home-fornecedor img {
  width: 180px;
  margin-top: 41.5px;
}

.home-btn_cadastro {
  margin-top: 20px;
  height: 50px;
  width: 250px;
  border: none;
  text-decoration: none;
  background-color: #FC7A00;
  color: #000;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  transition: 200ms;
}

.home-btn_cadastro:hover {
  transform: scale(1.1);
}
</style>

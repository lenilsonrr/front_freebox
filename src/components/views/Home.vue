<template>
  <div>
    <span class="titulo-home">FREE BOX</span>
    <div class="entradas">
      <div class="home-login">
        <img src="../imgs/login.png" alt="imagem login">
        <span>LOJISTA</span>
      </div>
      <!-- <div class="home-fornecedor">
        <a href="/fornecedor"><img src="../imgs/caminhao.png" alt="imagem fornecedor"></a>
        <span>FORNECEDOR</span>
      </div>-->
    </div>
    <a class="home-btn_cadastro" href="/login">Login</a>
    <a class="home-btn_cadastro" href="/cadastro">Cadastre-se agora!</a>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style>
.titulo-home {
  font-size: 28px;
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-weight: 900;
}

.entradas {
  margin-top: 30px;
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

.home-btn_cadastro:hover{
  transform: scale(1.1);
}
.esqueci{
  color: #000;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>

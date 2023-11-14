<template>
    <div class="box-cadastro">
        <form >
            <input type="email" placeholder="email" v-model="email" required>
            <input type="text" placeholder="nome" v-model="nome" required>
            <input type="tel" placeholder="cel"  v-model="telefone" required />
            <input type="text" placeholder="CNPJ" v-model="cnpj" required>
            <input type="password" placeholder="senha" v-model="senha" required>
        </form>
        <Botao nome="Cadastrar" @click="teste" />
    </div>
</template>
<script>
import Botao from '../util/Botao.vue';
import axios from 'axios';
import router from '../router';


export default {
    nome: 'cadastro',
    components: {
        Botao
    },
    data() {
        return {
            email: null,
            nome: null,
            telefone: null,
            cnpj: null,
            senha:null
        }
    }, methods: {
        async teste() {
            try {
                const response = await axios.post('http://localhost:8080/lojistas', {
                    email: this.email,
                    nome: this.nome,
                    telefone: this.telefone,
                    cnpj: this.cnpj,
                    senha: this.senha
                });
                this.limpar()
                this.$router.push('/login')
                console.log('Sucesso:', response.data);
            } catch (error) {
                console.error('Erro:', error);
            }
        },
        limpar() {
            this.email = ''
            this.nome = ''
            this.telefone = ''
            this.cnpj = ''
            this.senha = ''
        }
    },
}
</script>
<style>
.box-cadastro {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    background: #fff;
    padding: 100px;
    border-radius: 30px;
}

form {
    background: white;
}

.box-cadastro input {
    background: rgb(223, 222, 222);
    display: flex;
    outline: none;
    border: none;
    margin: 10px;
    height: 30px;
    width: 100%;
    text-align: center;
    border-radius: 30px;
}
</style>
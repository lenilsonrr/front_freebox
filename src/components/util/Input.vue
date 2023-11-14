<template>
 <input :type="tipo" :placeholder="placeholder" :v-model="dado" class="util-input" />
</template>
<script>
export default {
 props: {
  tipo: {
   type: String,
   default: ""
  }, placeholder: {
   type: String,
   default: ''
  },
  dado: {
   required: true
  }
 }
}
</script>
<style>
.util-input {
 background: rgb(223, 222, 222);
 outline: none;
 border: none;
 margin: 10px;
 height: 30px;
 width: 200px;
 text-align: center;
 border-radius: 30px;
}
</style>
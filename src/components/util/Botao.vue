<template>
  <button class="util-btn">{{ nome }}</button>
</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      default: ""
    }
  }
};
</script>
<style>
.util-btn {
  margin-top: 20px;
  height: 50px;
  width: 150px;
  border: none;
  text-decoration: none;
  background-color: #FC7A00;
  color: #000;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
}

.util-btn:hover {
  transform: scale(1.1);
}
</style>

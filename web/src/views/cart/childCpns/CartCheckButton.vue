<template>
  <div class="cart-check-button">
    <i :class="{checked:isChecked}"></i>
  </div>
</template>
 
<script>
export default {
name: "CartCheckButton",
props: {
  isChecked: {
    type: Boolean,
    default: true
  }
}
}
</script>
 
<style scoped>
.cart-check-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  font-family: 'icomoon';
}
i {
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
  color: #fff;
  text-align: center;
  line-height: 16px;
}
.checked {
  background-color: #7099e6;
  border: 0;
}
</style>
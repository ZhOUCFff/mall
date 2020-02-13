<template>
  <div class="login">
    <div class="mian-login">
      <div class="avatar">
        <i></i>
      </div>
      <div>
        <div class="register">登陆/注册</div>
        <div class="mobile">
          <i></i>
          <span>暂未绑定手机</span>
        </div>
      </div>
    </div>
    <div class="arrow-r">
      <i></i>
    </div>
  </div>
</template>
 
<script>
export default {
name: "Login"
}
</script>
 
<style scoped>
.login {
  display: flex;
  justify-content: space-between;
  background-color: rgba(113, 127, 249, 0.55);
  height: 120px;
  color: #fff;
}
.login i {
  font-family: 'icomoon';
}
.mian-login {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 5px;
}
.avatar {
  width: 60px;
  height: 60px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  line-height: 60px;
}
.avatar i {
  font-size: 30px;
  color: #aaa;
}
.arrow-r {
  display: flex;
  align-items: center;
  padding: 0 10px;
  font-size: 25px;
}
.mobile {
  padding: 5px 0;
}
</style>
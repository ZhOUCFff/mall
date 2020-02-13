<template>
  <div class="comment">
    <div v-if="Object.keys(dtRate).length != 0">
      <div class="user-comment">
        <span>用户评价</span>
        <span class="more">
          更多
          <i></i>
        </span>
      </div>
      <div class="user">
        <img :src="dtRate.user.avatar" alt />
        <span>{{dtRate.user.uname}}</span>
      </div>
      <div class="content">{{dtRate.content}}</div>
      <div class="date">
        <span>{{dtRate.created | getDate}}</span>
        <span class="style">{{dtRate.style}}</span>
      </div>
      <div v-if="dtRate.images" class="dt-cm-img">
        <img class="comment-img" :src="dtRate.images[n-1]" v-for="n in 2" />
      </div>
    </div>

    <div v-else>
      <div class="no-comment">
        <div class="no-user-comment">
          <span>用户评价</span>
        </div>
        <div class>暂无评论信息</div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { formatDate } from 'common/utils'
export default {
name: "DetailCommentInfo",
props: {
  dtRate: {
    type: Object,
  default() {
    return {}
  }
  }
},
filters: {
  getDate(value) {
    let date = new Date(value*1000)
    return formatDate(date,'yyyy-mm-dd')
  }
}
}
</script>
 
<style scoped>
.comment {
  padding: 0 10px 30px 10px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.more i {
  font-family: 'icomoon';
}
.user-comment {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}
.user span {
  margin: 0 10px;
  color: #333;
}
.user img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  border: 1px solid #f4f4f4;
}
.content {
  margin: 5px 0;
  color: #333;
}
.date {
  margin-bottom: 5px;
  font-size: 12px;
  color: #aaa;
}
.style {
  margin-left: 5px;
}
.dt-cm-img {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.dt-cm-img img {
  border-radius: 5px;
}
.comment-img {
  width: 46%;
  height: 160px;
  margin: 0 2%;
}

.no-comment {
  padding: 0 10px;
  background-color: #fff;
}
.no-user-comment {
  padding: 5px 0;
}
</style>
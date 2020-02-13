<template>
  <div class="params-info">
    <div class="rule" v-if="dtItemParams.tables">
      <table>
        <tr v-for="tr in dtItemParams.tables">
          <td v-for="item in tr">{{item}}</td>
        </tr>
      </table>
    </div>
    <div class="itemInfo" v-if="dtItemParams.set">
      <table>
        <tr v-for="item in dtItemParams.set">
          <td class="key">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
 
<script>
export default {
name: "DetailParamsInfo",
props: {
  dtItemParams: {
    type: Object,
    default() {
      return {}
    }
  }
}
}
</script>
 
<style scoped>
.params-info {
  padding: 0 10px;
}
.rule table {
  width: 100%;
  padding: 0 10px;
  font-size: 12px;
}
.rule tr {
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}
.rule > table > tr:last-child {
  border-bottom: 3px solid #f0f0f0;
}
.rule tr td {
  flex: 1;
}
.itemInfo table {
  width: 100%;
  padding: 0 10px;
  font-size: 12px;
}
.itemInfo tr {
  display: block;
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}
.key {
  width: 100px;
}
.value {
  color: #717ff9;
}
</style>
<template>
  <div class="back">
    <br>
    <br>
    <img class="img" src="../../assets/img/back.png" alt="马到成功" width="180">
    <br />
    <br />
    <br />
    <br />
    <h1>请提出您的意见</h1>
    <br />
    <Input class='in' v-model='ques' type='textarea' :autosize='{ minRows: 4, maxRows: 7 }'
      clearable='true'
      placeholder='反馈...'
    ></Input>
    <br />
    <br />
    <Button class='bt' type='primary' @click='fankui(true)'>确定</Button>
    <br />
  </div>
</template>
<script>
export default {
  name: 'table',
  data () {
    return {
      ques: null,
      ans: null
    }
  },
  methods: {
    fankui: function (nodesc) {
      this.$Notice.open({
        title: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;感谢您提出的宝贵意见！',
        duration: 10
      })
      this.ques = null
    }
  }
}
</script>
<style scoped>
.back{
  background-color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
}
.in {
  width: 35%;
}
.qa {
  background-color: #fff;
  text-align: center;
}
.bt{
  background-color:#66CCFF;
}
</style>


<template>
  <div class='qa'>
    <br />
    <img class='img' src='../../assets/img/nono.png' alt='马到成功' width='140'/>
    <br />
    <br />
    <h1>请输入您的问题：</h1>
    <br />
    <Input class='in' v-model='ques' type='textarea' :autosize='{ minRows: 4, maxRows: 7 }'
      clearable='true'
      placeholder='提问...'
    ></Input>
    <br />
    <br />
    <Button @click='query()' icon='ios-search' class='bt'>确定</Button>
    <Modal
        title="回答"
        v-model="modal"
        class-name="vertical-center-modal">
        <p v-if="isShow" class='zi'>{{ans.data.answer}}</p>
    </Modal>
    <br />
    <br>
    <!-- <h2>{{ans.data.answer}}</h2> -->
  </div>
</template>
<script>
const axios = require('axios')
export default {
  name: 'table',
  data () {
    return {
      ques: null,
      ans: '666',
      modal: false,
      isShow: false
    }
  },
  methods: {
    query: function () {
      let formData = new FormData()
      formData.append('question', this.ques)
      axios({
        method: 'POST',
        url: 'http://127.0.0.1:5000',
        data: formData
      }).then((response) => (this.ans = response))
      this.modal = true
      this.isShow = true
    }
  }
}
</script>
<style scoped>
.in {
  width: 50%;
}
.qa {
  background-color: #fff;
  text-align: center;
}
.zi{
  font-size:20px
}
.bt{
  background-color:#66CCFF;
}
</style>


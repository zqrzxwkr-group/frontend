<template>
  <div class='table'>
    <br>
    <h1 class='title'>考生选择地区以及文/理科</h1>
    <div class='select'>
      <RadioGroup v-model='button1' type='button' size='large' class='RadioGroup'>
        <Radio label='北京' class='pro'></Radio>
        <Radio label='安徽' class='pro'></Radio>
        <Radio label='重庆' class='pro'></Radio>
        <Radio label='福建' class='pro'></Radio>
        <Radio label='甘肃' class='pro'></Radio>
        <br />
        <Radio label='广东' class='pro'></Radio>
        <Radio label='广西' class='pro'></Radio>
        <Radio label='贵州' class='pro'></Radio>
        <Radio label='海南' class='pro'></Radio>
        <Radio label='河北' class='pro'></Radio>
        <br />
        <Radio label='河南' class='pro'></Radio>
        <Radio label='黑龙江' class='pro'></Radio>
        <Radio label='湖北' class='pro'></Radio>
        <Radio label='湖南' class='pro'></Radio>
        <Radio label='吉林' class='pro'></Radio>
        <br />
        <Radio label='江苏' class='pro'></Radio>
        <Radio label='江西' class='pro'></Radio>
        <Radio label='辽宁' class='pro'></Radio>
        <Radio label='内蒙古' class='pro'></Radio>
        <Radio label='宁夏' class='pro'></Radio>
        <br />
        <Radio label='青海' class='pro'></Radio>
        <Radio label='山东' class='pro'></Radio>
        <Radio label='山西' class='pro'></Radio>
        <Radio label='陕西' class='pro'></Radio>
        <Radio label='四川' class='pro'></Radio>
        <br />
        <Radio label='天津' class='pro'></Radio>
        <Radio label='西藏' class='pro'></Radio>
        <Radio label='新疆' class='pro'></Radio>
        <Radio label='云南' class='pro'></Radio>
      </RadioGroup>
    </div>
    <div class='select2'>
      <RadioGroup v-model='wenli' size='large'>
        <Radio label='理科' class='wl'></Radio>
        <Radio label='文科'></Radio>
      </RadioGroup>
    </div>
    <div class='select3'>
      <Button type='primary' icon='ios-search' @click='query()'>查询</Button>
    </div>
    <br />
    <br />
    <div v-if='isShow'>
      <Table :columns='columns1' :data='data1'></Table>
      <Page :total="total" :current="currentPage" :page-size="pageSize" @on-change="changePage"></Page>
    </div>
  </div>
</template>
<script>
const axios = require('axios')
export default {
  name: 'table',
  components: {},
  data () {
    return {
      isShow: false,
      button1: '北京',
      wenli: '理科',
      info: null,
      total: 100,
      currentPage: 1,
      pageSize: 20,
      columns1: [
        {
          title: '学校',
          key: 'name'
        },
        {
          title: '双一流情况',
          key: 'dc'
        },
        {
          title: '2020年分数',
          key: 's2020'
        },
        {
          title: '2019年分数',
          key: 's2019'
        },
        {
          title: '2018年分数',
          key: 's2018'
        },
        {
          title: '2017年分数',
          key: 's2017'
        },
        {
          title: '2016年分数',
          key: 's2016'
        }
      ],
      data1: [
      ]
    }
  },
  methods: {
    query: function () {
      axios
        .get(
          'http://47.94.129.13:8081/query/' + this.button1 + '/' + this.wenli + '/' + this.currentPage
        )
        .then((response) => (this.info = response))
      this.isShow = true
      this.total = 0
      this.data1 = []
      for (var i = 0; i < this.info.data.data.length; i++) {
        var item = {name: this.info.data.data[i].school,
          dc: this.info.data.data[i].doubleFirstClass,
          s2020: this.info.data.data[i].avg2020,
          s2019: this.info.data.data[i].avg2019,
          s2018: this.info.data.data[i].avg2018,
          s2017: this.info.data.data[i].avg2017,
          s2016: this.info.data.data[i].avg2016}
        this.data1.unshift(item)
      }
      this.total = this.info.data.total
      // console.log(this.total)
    },
    changePage (index) {
      this.currentPage = index
      this.data1 = []
      this.query()
    }
  }
}
</script>
<style scoped>
.title {
  text-align: center;
}
.select{
  margin: auto;
  width: 50%;
  padding: 20px;
}
.select2{
  margin: auto;
  width: 15%;
  padding: 20px;
}
.select3{
  margin: auto;
  width: 12%;
  padding: 20px;
}
.pro{
  width: 120px;
  height: 60px;
  text-align: center;
}
</style>
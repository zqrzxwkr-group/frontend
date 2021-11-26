<template>
  <div class='table'>
    <br>
    <h1 class='title'>查询各地区学校基本信息</h1>
    <div class='select'>
      <RadioGroup
        v-model='button1'
        type='button'
        size='large'
        class='RadioGroup'
      >
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
        <Radio label='all' class='pro'></Radio>
      </RadioGroup>
    </div>
    <br />
    <div class='select3'>
      <Button type='primary' icon='ios-search' @click='query()'>查询</Button>
    </div>
    <div v-if='isShow'>
      <Table :columns='columns1' :data='data1' style="text-align: center;"></Table>
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
      total: 100,
      currentPage: 1,
      pageSize: 20,
      isShow: false,
      button1: '北京',
      info: null,
      columns1: [
        {
          title: '学校',
          key: 'name'
        },
        {
          title: '图标',
          key: 'icon',
          render: (h, params) => {
            return h('img', {
              props: {
                type: 'primary',
                size: 'small'
              },
              attrs: {
                src: params.row.icon, style: 'width: 90px;height: 90px;border-radius: 2px;'
              },
              style: {
              }
            })
          }
        },
        {
          title: '所在地',
          key: 'city'
        },
        {
          title: '所属部门',
          key: 'department'
        },
        {
          title: '特色',
          key: 'charact'
        },
        {
          title: '官方网址',
          key: 'url'
        }
      ],
      data1: []
    }
  },
  methods: {
    query: function () {
      axios
        .get(
          'http://47.94.129.13:8081/college/' + this.button1 + '/' + this.currentPage
        )
        .then((response) => (this.info = response))
      this.isShow = true
      this.total = 0
      this.data1 = []
      for (var i = 0; i < this.info.data.data.length; i++) {
        var item = {name: this.info.data.data[i].name,
          icon: this.info.data.data[i].icon,
          city: this.info.data.data[i].city,
          department: this.info.data.data[i].department,
          charact: this.info.data.data[i].charact,
          url: this.info.data.data[i].url}
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
.select {
  margin: auto;
  width: 50%;
  padding: 20px;
}
.select2 {
  margin: auto;
  width: 15%;
  padding: 20px;
}
.select3 {
  margin: auto;
  width: 12%;
  padding: 20px;
}
.pro {
  width: 120px;
  height: 60px;
  text-align: center;
}
</style>
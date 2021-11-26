<template>
  <div id="app" class="type" :style="{background:'url('+bgUrl+')'}">
    <Row class="bg" :style="{background:'url('+bgUrl+')'}">
      <Col :xs="16" offset="4">
      <Card style="margin: 100px auto;max-width: 600px;padding-top: 20px;text-align: left">
        <div v-if="token">
          <Form ref="formCustom" :model="formCustom" :label-width="110">
            <Form-item label="考生所在地区" prop="userName">
              <Input v-model="formCustom.userName" placeholder="请输入" style="width: 80%"></Input>
            </Form-item>
            <Form-item label="用户姓名" prop="idCard">
              <Input v-model="formCustom.idCard" placeholder="请输入" style="width: 80%"></Input>
            </Form-item>
            <Form-item label="密码" prop="phone">
              <Input v-model="formCustom.phone" placeholder="请输入" style="width: 80%"></Input>
            </Form-item>
            <Form-item>
              <Button type="primary" @click="handleSubmit()" style="width: 80%" :loading="loading">提交
              </Button>
            </Form-item>
          </Form>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
  // import { GetQueryString } from '@/common/utils'
  import bgUrl from '@/assets/img/bg_login.jpg'
  export default {
    name: 'type',
    data () {
      return {
        token: true,
        loading: false,
        bgUrl: bgUrl,
        formCustom: {
          userName: '',
          idCard: '',
          phone: ''
        }
      }
    },
    methods: {
      handleSubmit () {
        this.$router.go(-1)
        this.$Message.success('注册成功!')
      }
    }
  }
</script>

<style lang="less" scoped>
  html, body {
    position: absolute;
    height: 100%;
    width: 100%;
  }
.bg{

}
  #app {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
</style>

<template>
  <div class="login">
    <div class="bg">
    </div>
    <Modal class="login-modal" v-model="loginModal" width="450" :closable="false" :mask-closable="false">
      <div style="height:300px;width:100%:">
        <h2 style="margin:10px;color:#abcdef;text-align:center">
          <img :src="require('@/assets/img/logo.png')" alt="" height="120"></h2>

        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" >
          <Form-item prop="name" :label-width="40" >
            账 户：<Input v-model="formValidate.name" placeholder="请输入账户名称" style="width: 300px" ></Input>
          </Form-item>
          <Form-item prop="password" :label-width="40">
            密 码：<Input v-model="formValidate.password" @keyup.native.enter="handleSubmit('formValidate')" type="password" placeholder="请输入账户密码" style="width: 300px"></Input>
          </Form-item>

          <Row justify="center">
            <Col span="8" offset="4">
            <Checkbox-group v-model="formValidate.remember">
              <h3><Checkbox label="记住密码"></Checkbox></h3>
            </Checkbox-group>
            </Col>
            <Col span="6" >
            <a style="float:right" @click="toRegister"><h3>新用户注册</h3></a>
            </Col>
          </Row>

        </Form>

      </div>
      <div slot="footer">
        <Button type="primary" size="large" long :loading="modal_loading" @click="handleSubmit('formValidate')">登录
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  export default {
    name: 'login',
    data () {
      return {
        loginModal: true,
        modal_loading: false,
        formValidate: {
          name: '',
          password: ''
        },
        ruleValidate: {
          name: [
            {required: true, message: '姓名不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ]

        }
      }
    },
    methods: {
      handleSubmit (name) { // login
        this.$refs[name].validate((valid) => {
          this.modal_loading = true
          setTimeout(() => {
            this.modal_loading = false

            if (this.formValidate.name === '123' && this.formValidate.password === '123') {
              valid = true
            } else {
              valid = false
            }
            if (valid) {
              this.$Message.success('登录成功!')
              Cookies.set('token', this.formValidate.password)
              this.$router.push('/index')
            } else {
              this.$Message.error('登录失败!')
              this.$Notice.warning({
                title: '登录提示',
                desc: '请输入正确的用户名和密码'
              })
            }
          }, 100)
        })
      },
      toRegister () {
        this.$router.push('/register')
      }
    }
  }
</script>



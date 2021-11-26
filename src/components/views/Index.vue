<template>
  <div class='index'>
    <Carousel v-model='value1' height='600px' dots='outside'>
      <CarouselItem>
        <div class='carousel1'>
          <img src='../../../static/img/people.png' alt='马到成功' />
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class='carousel2'>
          <h1>距离2022年高考倒计时</h1>
          <br>
          <br>
          <h1 id='info' class='info'></h1>
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class='carousel3'>
          <img class="img" src="../../assets/img/gk.png" alt="马到成功" width="800">
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: 0
    }
  },
  methods: {
    indexs: function () {
      var info = document.getElementById('info')
      var nd = new Date()
      var td = new Date(2022, 5, 7)
      var diff = td - nd
      var day = parseInt(diff / (1000 * 60 * 60 * 24))
      var hour = parseInt((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var minutes = parseInt((diff % (1000 * 60 * 60)) / (1000 * 60))
      info.innerText =
        day + '天' + hour + '小时' + minutes + '分钟'
    }
  },
  mounted () {
    this.indexs()
  }
}
</script>
<style>
.carousel1 {
  position: relative;
  text-align: center;
  top: 50px;
}
.carousel2 {
  font-size:25px;
  position: relative;
  text-align: center;
  top: 200px;
}
.carousel3 {
  position: relative;
  text-align: center;
  top: 60px;
}
.info{
  font-family:serif;
}
</style>
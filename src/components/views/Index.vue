<template>
  <div class='index'>
    <Carousel v-model='value1' height='600px' dots="outside">
      <CarouselItem>
        <div class='carousel'>
          <img src="../../../static/img/people.png" alt="马到成功">
        </div>
      </CarouselItem>
      <CarouselItem>
        <div class='carousel'>2</div>
      </CarouselItem>
      <CarouselItem>
        <div class='carousel'>3</div>
      </CarouselItem>
      <CarouselItem>
        <div class='carousel'>4</div>
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
  }
}
</script>
<style>
.carousel
{
  position: relative;
  text-align:center;
  top: 50px;
}
</style>
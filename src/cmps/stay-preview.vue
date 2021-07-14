<template>
<section class="stay-card-container">
    <div class="block">
<el-carousel trigger="click" height="150px" width="250px" direction="horizontal" type="card">
      <el-carousel-item v-for="(imgUrl,idx) in stay.imgUrls" :key="idx">
        <img :src="require(`@/assets/imgs/stays/${stay.loc.countryCode}/${stay.imgFolder}/${imgUrl}`)">
      </el-carousel-item>
    </el-carousel>
    </div>
 


</section>
  
</template>

<script>
export default {
props:{
    stay:Object,
}
}
</script>

<style>
  .el-carousel__item img {
    width: 250px;
  }

 

  
</style>
<template>
<section class="stay-card-container">
    
<!-- <el-carousel trigger="click" height="150px" width="250px" direction="horizontal" type="card">
      <el-carousel-item v-for="(imgUrl,idx) in stay.imgUrls" :key="idx">
        <img :src="require(`@/assets/imgs/stays/${stay.loc.countryCode}/${stay.imgFolder}/${imgUrl}`)">
      </el-carousel-item>
    </el-carousel> -->
    <img class="preview-img" :src="require(`@/assets/imgs/stays/${stay.loc.countryCode}/${stay.imgFolder}/${stay.imgUrls[0]}`)">
    <div class="card-rating">
        <p><i class="el-icon-star-on star-icon"></i>4.7</p>
    </div>
    <div class="card-location">{{stay.loc.country}} - {{stay.propertyType}}</div>
    <div><span>{{stay.price}}$ </span>/ night</div>

    
 


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
  

 

  
</style>
<template>
  <section class="stay-list">
      
          <section  v-for="stay in stays" :key="stay._id" class="stay-preveiw-container">
              <stay-preview :stay="stay">

              </stay-preview>
         </section>
          
      
  </section>
</template>

<script>
import stayPreview from './stay-preview'
export default {
    props:{
        stays:Array,
    },
    components:{
        stayPreview
    }
}
</script>



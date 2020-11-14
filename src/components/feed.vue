<template>
  <div class="wrap">
      <!-- <status :dimensions="[58,58]"/> -->
      <div class="instafeeds">
          <postFeed style="margin-bottom:50px;" v-for="(feed,i) in $store.state.feeds" :key="i" :testName="i" :feed="feed"/>
      </div>
  </div>
</template>


<script>
import status from '@/components/status.vue'
import postFeed from '@/components/postFeed.vue'
export default {
  name: 'feed',
  components:{
    postFeed,
    status
  },
  props: {
  },
  data(){
    return{ 
        
    }
  },
  methods: {
 
  },
  mounted() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
    min-height:100%;
}
.instafeeds{
    background:var(--floor);
}
@media only screen and (max-width:1250px){

}
@media only screen and (max-width:480px){
  
}
</style>

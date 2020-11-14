<template>
  <div style="height:auto;width:100%;display:flex;">
    <v-lazy-image :src="cleanImage(url)" :src-placeholder="``"/>
    <!-- <img :src="cleanImage(url)" lazy alt=""> -->
    <!-- <img src="@/assets/_1.jpg" alt=""> -->
    <!-- <img class="himage" :src="cleanImage(url)" lazy alt=""> -->
  </div>
</template>


<script>
import VLazyImage from "v-lazy-image";
import {cleanImage} from "@/dataParser/cleaners.js";
// const imge=()=>import('@/dataParser/cleaners.js')
export default {
  name: 'imageFeedcomp',
  components:{
    VLazyImage
  },
  props: {
      url:String
  },
  data(){
    return{ 
        
    }
  },
  methods: {
      cleanImage(url){
          return cleanImage(url)
      }
  },
  mounted() {
      // console.log(this.url)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    /* height:100%; */
    height:auto;
    width:100%;
    min-height:350px;
    /* height:fit-content; */
    max-height:550px;
    transition:0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
}
@media only screen and (max-width:1250px){

}
@media only screen and (max-width:480px){
  
}
</style>

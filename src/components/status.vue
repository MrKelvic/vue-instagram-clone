<template>
  <div>
    <div :style="(()=>{if(title) return 'box-shadow:none;';})()" class="st shadow">
    <button class="shadow" style="left:1%;"> <i class="fa fa-chevron-left"></i></button>
    <button class="shadow" style="right:1%;"> <i class="fa fa-chevron-right"></i></button>
    <div :style="(()=>{if(title) return 'height:100px;background:none;';})()" class="storiesSec slideScroll">
        <div class="stHold">
            <div v-for="i in 5" :key="i" class="story" :style="(()=>{if(title) return 'margin:0px 24px;';})()">
                <span class="grad">
                    <img :style="`width:${dimensions[0]}px;height:${dimensions[1]}px;`" :src="cleanImage(url)" alt="">
                    <!-- <img :style="`width:${dimensions[0]}px;height:${dimensions[1]}px;`" src="@/assets/bitmoji.png" alt=""> -->
                </span>
                <p v-if="!title">User {{i}}</p>
                <p style="margin-top:11px;font-weight:600;" v-if="title">title</p>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>


<script>
import {cleanImage} from "@/dataParser/cleaners.js";
export default {
  name: 'status',
  components:{

  },
  props: {
      status:Array,
      dimensions:Array,
      title:Boolean
  },
  data(){
    return{ 
        url:'_summer-1280x720.jpg'
    }
  },
  methods: {
      cleanImage(path){
          return cleanImage(path)
      }
  },
  mounted() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.st{
    margin-bottom:35px;
    position: relative;
}
.storiesSec{
    width:100%;
    height:88px;
    /* background:red; */
    background:var(--background);
    padding:17px 0px;
    position:relative;
    overflow:overlay;
    padding-left:15px;
}
.st>button{
    position:absolute;
    border:none;
    background:var(--background);
    width:23px;
    height:23px;
    border-radius:50px;
    display:grid;
    place-content:center;
    place-items:center;
    color:var(--color);
    top:38%;
    z-index:1;
}
.stHold{
    position:relative;
    display:flex;
    height:100%;
    width:100%;
}
.story{
    /* background:blue; */
    width:88px;
    margin:0px 10px;
    height:100%;
    display:grid;
    place-items:center;
    /* text-align:center; */
}
.story p{
    font-size:0.84em;
    color:var(--color);
}
.story img{
    margin-bottom:1px;
    width:58px;
    height:58px;
    border-radius:50px;
    background:var(--background);
    /* border:3px solid; */
}
@media only screen and (max-width:1250px){

}
@media only screen and (max-width:480px){
  
}
</style>

<template>
  <div>
    <div class="wrap hvwrap zoomimage shadow">
        <div v-if="url.length>1" class="moreicon">
            <span></span>
            <span style="top:-2px;right:15%;box-shadow:1px 1px 0px 0px #0e0e0ed9;"></span>
        </div>
        <!-- <img class="himage" :src="require.resolve(`@/assets/_3.jpg`)" lazy alt=""> -->
         <v-lazy-image class="himage" :src="cleanImage(url[0].url)" :src-placeholder="``"/>
        <!-- <img  :src="cleanImage(url[0])" lazy alt=""> -->
        <div class="inter">
            <div>
                <div>
                    <button class="shadow" title="like"> <i class="fa fa-heart-o"></i></button>
                    <button class="shadow" title="comment"> <i class="fa fa-comment-o"></i></button>
                    <button class="shadow" title="share"> <i class="fa fa-paper-plane-o"></i></button>
                </div>
                <div style="position:absolute;right:0%;top:0%;">
                    <button class="shadow" title="save" style="margin:0px;"> <i class="fa fa-bookmark"></i></button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
import VLazyImage from "v-lazy-image";
import {cleanImage} from "@/dataParser/cleaners.js";
export default {
  name: 'postthumb',
  components:{
      VLazyImage
  },
  props: {
      url:Array
  },
  data(){
    return{ 
        
    }
  },
  methods: {
      cleanImage(path){
          return cleanImage(path)
      }
  },
  mounted() {
    //   console.log(this.url)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
    height:100%;
    width:100%;
    display:flex;
    object-fit:contain;
    position:relative;
    border-radius:3px;
    transition:0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
    /* transition:0.2s 0.2s cubic-bezier(0.65, 0.05, 0.36, 1); */
    overflow: hidden;
}
/* .hvwrap:hover .inter{
    display:block;
} */
/* .wrap:hover{
    cursor: pointer;
    transform:scale(1.1);
    z-index:1;
} */
.himage{
    transition:0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
}
/* .zoomimage:hover .himage{
    transform:scale(1.3);
} */
.moreicon{
    position:absolute;
    width:15px;
    height:15px;
    right:3%;
    top:4%;
    background:transparent;
}
.moreicon>span{
    position: absolute;
    display:block;
    background:#fff;
    width:14px;
    height:14px;
    right:0%;
    border-radius:2px;
}
img{
    width:100%;
    height:100%;
    /* border-radius:5px; */
}
.inter{
    position:absolute;
    bottom:0%;
    width:92%;
    width:-webkit-fill-available;
    padding:0px 10px;
    padding-bottom:5px;
    display:none;
    animation:scrollIn 0.2s linear backwards;
}
.inter button{
    font-size:1em;
    width:25px;
    height:25px;
    border-radius:50px;
    color:var(--color);
    background:var(--background);
    margin-right:7px;
}
.inter>div{
    position:relative;
    width:100%;
    /* background:red; */
}
@keyframes scrollIn{
    from{
        bottom:-7%;
        opacity:0;
    }
    to{
        bottom:0%;
        opacity:1;
    }
}
@media only screen and (max-width:1250px){

}
@media only screen and (max-width:480px){
  
}
</style>

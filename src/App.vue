<template>
  <div class="root_app">
    <!-- TOPS -->
    <div class="">
      <topNav style="position:fixed;top:0px;width:100%;z-index:2;"/>
      <div style="margin-top:80px;">
        <!-- routes -->
        <router-view class="route" />
      </div>
    </div>
  </div>
</template>

<script>
import topNav from '@/components/topNav.vue';
export default {
  name: 'App',
  components: {
    topNav
  },
   computed:{
     
  },
  data(){
    return{

    }
  },
  methods:{

  },
  mounted(){
   
  }
}
</script>

<style>
/* 
1125-big screeen
480-mobile
*/
:root{
  --theme:#1da1f2;
  --bold-font:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  --background:#fff;
  --shadowcolor:#0000001f;
  --shadowinput:#00000083;
  --hove:#17171721;
  --color:#000;
  --floor:#fafafa;
  --grey:#8e8e8e;
}
*{
  margin:0px;
  padding:0px;
  font-family:var(--bold-font);
  scroll-behavior:smooth;
  /* transition:all 0.1s linear; */
}
ul,li{
  list-style:none;
}
a{
  text-decoration:none;
}
button:hover{
  cursor: pointer;
}
button{
  border:none;
}
#app{
  color:var(--color);
  /* background:var(--floor); */
  font-size:12px;
}
img{
  /* background:#3d4145; */
}
.grad{
  width:fit-content;
  height:fit-content;
  display:flex;
  place-items:center;
  padding:2px;
  border-radius:50%;
  background-image:linear-gradient(5deg,#de4a6f,#f7813c,#f99848,#da4b7a,#da4f83)
}
.grad>img{
  background:var(--background);
}
.root_app{
  height:fit-content;
}
.raw{
  white-space: pre-wrap;
}
html{

}
body{
  color:var(--color);
  background:var(--floor);
}
.root_app{
  /* color:var(--color);
  background:var(--floor); */
}
.grey{
  color:grey;
}
.shadow{
  box-shadow:0px 0px 2px #0404044a;
  /* box-shadow:0px 0px 3px var(--shadowcolor); */
}
.slideScroll{
  scroll-behavior:smooth;
}
.slideScroll::-webkit-scrollbar {
    width:0px;
    height: 0px;
}
.slideScroll::-webkit-scrollbar-track {
  background:transparent;
    /* background:var(--background); */
}

/* Handle */
.slideScroll::-webkit-scrollbar-thumb {
    /* background: #00000036; */
    background:transparent;
}

/* Handle on hover */
.slideScroll::-webkit-scrollbar-thumb:hover {
    background: ; 
}
@media only screen and (max-width:1250px){

}
@media only screen and (max-width:930px){
  /* Hide third tab */
  /* .root_app {
  max-width:670px; 
  margin: 0 auto;
} */
  
}
@media only screen and (max-width:760px){

}
@media only screen and (max-width:480px){

}
</style>

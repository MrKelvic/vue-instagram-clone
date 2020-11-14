<template>
  <div>
    <div>
        <ul class="navItem">
            <li>
                <button class="exfont"><i class="fa fa-home"></i> </button>
            </li>
            <li>
                <button><i class="fa fa-paper-plane-o"></i> </button>
            </li>
            <li>
                <button class="exfont"><i class="fa fa-compass"></i> </button>
            </li>
            <li>
                <button><i class="fa fa-heart-o"></i> </button>
            </li>
            <li>
                <button><img src="@/assets/bitmoji.png" alt=""></button>
            </li>
        </ul>
    </div>
  </div>
</template>


<script>
// import feeds from '@/components/feeds.vue'
export default {
  name: 'navComps',
  components:{
    // feeds
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
.navItem{
    display:flex;
}
.navItem li{
    margin-left:10px;
    /* background:red; */
    position: relative;
    height:fit-content;
    /* width:100%; */
    /* height:100%; */
}
.navItem li>button img{
    width:100%;
    height:100%;
}
.exfont{
    font-size:1.78em !important;
}
.navItem li>button{
    transition:0.2s ease-in;
    overflow: hidden;
    border:none;
    padding:2px;
    background:none;
    font-size:1.48em;
    display:grid;
    place-items:center;
    width:37px;
    height:37px;
    border-radius:50px;
    /* background:red; */
}
/* .navItem li>button:hover{
    background:var(--hove);
} */
@media only screen and (max-width:1250px){

}
@media only screen and (max-width:480px){
  
}
</style>

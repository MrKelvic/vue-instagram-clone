<template>
  <div class="bdwrapper">
    <input style="width:215px;" placeholder="Search" type="text">
  </div>
</template>


<script>
// import feeds from '@/components/feeds.vue'
export default {
  name: 'searchBar',
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
.bdwrapper{

}
input{
    height:21px;
    background:var(--floor);
    color:var(--color);
    border:none;
    border:1px solid var(--shadowcolor);
    border-radius:5px;
    padding:2px;
    font-size:1em;
    /* box-shadow:0px 0px 2px 0px var(--shadowinput); */
    text-align:center;
}
@media only screen and (max-width:1250px){

}
@media only screen and (max-width:480px){
  
}
</style>

<template>
  <div>
    <div class="bdwrap">
        <div>
            <div style="display:flex;width:30%;">
                <img class="logo" src="@/assets/log.png" alt="">
            </div>
            <div style="width:31%;">
                <searchBar class="searchComp"/>
            </div>
            <div style="width:39%;">
                <navComps class="navComp"/>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
import navComps from '@/components/navComps.vue';
import searchBar from '@/components/searchBar.vue';
// import feeds from '@/components/feeds.vue'
export default {
  name: 'topNav',
  components:{
    navComps,
    searchBar
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
.bdwrap{
    width:100%;
    background:var(--background);
    padding:8px 0px;
    box-shadow:0px 1px 0px var(--shadowcolor);
}
.bdwrap>div{
    display:flex;
    place-items:center;
    place-content:center;
    width:89%;
    margin:auto;
}
.bdwrap>div>div{
    /* width:33.33%; */
    /* background:green; */
    display:flex;
    place-items:center;
    place-content:center;
}
@media only screen and (max-width:1250px){

}
@media only screen and (max-width:480px){
  
}
</style>

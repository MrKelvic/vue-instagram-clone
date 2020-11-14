<template>
  <div class="home">
      <div class="feed">
        <feed/>
      </div>
      <div class="fixedtab">
        <div class="fix">
          <div class="suggestions">
            <div class="user_det">
              <span class="grad">
                <img src="@/assets/bitmoji.png" alt="">
              </span>
              <div>
                <h3>User</h3>
                <p class="grey">Kels</p>
              </div>
            </div>
            <div class="sugs">
              <div>
                <h3 class="grey">Suggestions For You</h3>
                <a href="/">See All</a>
              </div>
              <ul>
                <li>
                  <div class="sugper">
                    <span class="grad">
                      <img src="@/assets/bitmoji.png" alt="">
                    </span>
                    <div>
                      <h3>User</h3>
                      <p class="grey">activity</p>
                    </div>
                    <button>Follow</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>


<script>
import feed from '@/components/feed.vue'
export default {
  name: 'Home',
  components:{
    feed
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
.home{
  width:100%;
  /* background:var(--floor); */
  min-height:88vh;
  display:flex;
}
.feed{
  width:60%;
  /* background:red; */
  position:relative;
  /* box-shadow:0px 0px 2px var(--shadowcolor); */
}
.feed>div{
  /* background:yellow; */
  width:75%;
  position:absolute;
  right:0%;
}
.fixedtab{
  width:40%;
  /* background:green; */
}
.fix{
  position:fixed;
  margin-left:30px;
  width:265px;
  padding:6px 0px;
  /* background:red; */
}

/* suggestions */
/* .suggestions{

} */
.suggestions img{
  border-radius:50px;
  background:var(--background);
}
.suggestions h3{
  font-size:0.88em;
}
.suggestions p{
  font-size:0.8em;
}
.user_det{
  display:flex;
  margin-bottom:20px;
  place-items:center;
  padding:13px 0px;
}
.user_det>span{
margin-right:15px;
width:58px;
  height:58px;
}
.user_det img{
  width:58px;
  height:58px;
}
.user_det>div h3{
  margin-bottom:5px;
}
.sugs{

}
.sugs>div{
  display:flex;
  place-items:center;
  position:relative;
  margin-bottom:20px;
}
.sugs>div a{
  color:var(--color);
  font-size:0.8em;
  position:absolute;
  right:1%;
}
.sugs li{

}
.sugs ul{

}
.sugper{
  display:flex;
  place-items:center;
  position:relative;
}
.sugper>span{
  width:35px;
  height:35px;
  margin-right:15px;
}
.sugper img{
  width:35px;
  height:35px;
}
.sugper>div{

}
.sugper>button{
  position:absolute;
  right:1%;
  padding:5px;
  background:none;
  color:#0095f6;
  font-weight:600;
}
@media only screen and (max-width:1250px){

}
@media only screen and (max-width:1005px){
.fixedtab{
  display:none;
  visibility: hidden;
}
.feed{
  width:100%;
}
.feed>div{
  right:unset;
  position:relative;
  margin:auto;
  width:60%;
}
}
@media only screen and (max-width:480px){
  
}
</style>

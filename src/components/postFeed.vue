<template>
  <div class="home">
      <div>
          <div class="feed shadow">
              <div class="topBar">
                  <div class="userdet">
                      <router-link :to="{name:'user',params:{id:feed.owner.at,data:feed.owner}}">
                        <v-lazy-image :src="cleanImage(feed.owner.img)" :src-placeholder="``"/>
                      </router-link>
                      <div>
                        <router-link style="font-weight:600;font-size:0.9em;" :to="{name:'user',params:{id:feed.owner.at,data:feed.owner}}">
                           {{feed.owner.at}}
                        </router-link>
                        <p style="display:block;margin-top:2px;">{{feed.cnt[index].location}}</p>
                      </div>
                  </div>
                  <button><i class="fa fa-ellipsis-h"></i></button>
              </div>
              <div @dblclick="dolike" @click="toggleTags" class="content">
                  <div>
                      <div :id="feed.cnt[0].id" class="likedHeart">
                          <i class="fa fa-heart"></i>
                      </div>
                      <div class="cntNav" v-if="feed.cnt.length>1">
                        <button @click="nextContent(-1)" class="shadow ignore" style="left:1%;"> <i class="fa fa-chevron-left ignore"></i></button>
                        <button @click="nextContent(1)" class="shadow ignore" style="right:1%;"> <i class="fa fa-chevron-right ignore"></i></button>
                      </div>
                      <component :is="feed.cnt[index].type" :url="feed.cnt[index].url"></component>
                      <div class="dots" v-if="feed.cnt.length>1">
                          <span :style="(()=>{if(i-1==index) return 'background: #0095f6;'})()" v-for="i in feed.cnt.length" :key="i"></span>
                      </div>
                      <span v-if="feed.cnt[index].tags.length>0" class="hasTag">
                          <i class="fa fa-user"></i>
                      </span>
                      <div :style="`left:${t.cordinates[0]};top:${t.cordinates[1]};`" :class="`tag ${feed.cnt[index].id}`" v-for="(t,i) in feed.cnt[index].tags" :key="i">
                          <router-link :to="{name:'user',params:{id:t.user.at,data:i.user}}">
                              <div></div>
                          {{t.user.at}}
                          </router-link>
                      </div>
                  </div>
              </div>
              <div class="bottomBar">
                <div class="interactions">
                    <div>
                        <button> <i class="fa fa-heart-o"></i></button>
                        <button> <i class="fa fa-comment-o"></i></button>
                        <button> <i class="fa fa-paper-plane-o"></i></button>
                    </div>
                    <div style="position:absolute;right:0%;">
                        <button style="margin:0px;"> <i class="fa fa-bookmark"></i></button>
                    </div>
                </div>
                <div class="comments">
                    <div>
                        <ul>
                            <li class="comment">
                                <p>
                                    <span><router-link :to="{name:'user',params:{id:feed.comments[0].owner.at,data:feed.comments[0].owner.at}}">{{feed.comments[0].owner.at}}</router-link></span> {{feed.comments[0].txt}}
                                </p>
                                <div></div>
                            </li>
                        </ul>
                    </div>
                    <div v-if="feed.comments.length>3" style="font-size:14px;color:#8e8e8e;">View all {{feed.comments.length-1}} comments</div>
                    <div v-if="feed.comments.length>1">
                        <ul>
                            <li v-for="i in (feed.comments.length<=2?1:2)" :key="i" class="comment">
                                <p>
                                    <span><router-link :to="{name:'user',params:{id:feed.comments[i].owner.at,data:feed.comments[i].owner}}">{{feed.comments[i].owner.at}}</router-link></span> {{feed.comments[i].txt}}
                                </p>
                                <div> <i class="fa fa-heart-o"></i> </div>
                            </li>
                        </ul>
                    </div>
                </div>
                  <p class="date grey">{{new Date(feed.time).toDateString()}}</p>
              </div>
            <div class="postCmt">
                <textarea placeholder="Add a comment..." :style="setHeight(cmnt.txt.length)" v-model="cmnt.txt" name=""></textarea>
                <button>Post</button>
            </div>
          </div>
      </div>
  </div>
</template>


<script>
import imge from "@/components/imageFeedcomp.vue";
const vid=()=>import('@/components/videoFeedcomp.vue')
import VLazyImage from "v-lazy-image";
import {cleanImage} from "@/dataParser/cleaners.js";
export default {
  name: 'postFeed',
  components:{
      imge,
      vid,
      VLazyImage
  },
  props: {
      feed:Object,
      testName:Number
  },
  computed:{
    //   add every 60chars
      setHeight(){
          return ((i)=>{
              return {height:`${(i<30?30*(i/10):i)}px`};
          })
      }
  },
  data(){
    return{ 
        index:0,
        cmnt:{
            owner:null,
            txt:''
        }
    }
  },
  methods: {
      cleanImage(url){
          return cleanImage(url)
      },
      nextContent(v){
          let lim=this.feed.cnt.length-1
          v=this.index+v;
         this.index=v>lim?0:v<0?lim:v;
      },
      dolike($event){
          if(!$event.target.href&&![...$event.target.classList].includes('ignore')){
            let cl=document.getElementById(this.feed.cnt[0].id)
            let opt=[...cl.classList].includes('dolikeanimation')
            if(opt){
                cl.classList.remove('dolikeanimation')
            }else{
                cl.classList.add('dolikeanimation');
                setTimeout(()=>{this.dolike($event)},1000)
            }
          }
      },
      toggleTags($event){
        //   console.log([...$event.target.classList])
          if(!$event.target.href&&![...$event.target.classList].includes('ignore')){
              let el =document.querySelectorAll(`.${this.feed.cnt[this.index].id}`);
              let opt=['','none'].includes(el[0].style.display)
              for(let i=0;i<el.length;++i){
                  if(opt){
                      el[i].style.display='unset';
                  }else{
                      el[i].style.display='none';
                  }
              }
          }
      }
  },
  mounted() {
    //   console.log(this.feed)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    color:var(--color);
}
.feed{
    color:var(--color);
    border-radius:3px;
    background:var(--background);
    /* padding:8px 0px; */
}
.topBar{
    display:flex;
    position:relative;
    padding:12px 15px;
    place-items:center;
}
.userdet,.userdet a{
    /* width:97%; */
    display:flex;
    place-items:center;
}
.userdet img{
    width:36px;
    height:36px;
    border-radius:50px;
    background:var(--background);
    margin-right:10px;
}
.userdet p{
    /* font-weight:500; */
    font-size:0.8em;
}
.topBar>button{
    transition:0.2s ease-in;
    position:absolute;
    right:1%;
    width:27px;
    height:27px;
    border-radius:40px;
    display:grid;
    place-items:center;
    background:none;
}
.topBar>button:hover{
    background:var(--hove);
}
.content>div{
    /* height:fit-content; */
    min-height:350px;
    position: relative;
    /* background:red; */
    background:#0000001c;
    display:flex;
    place-content:center;
    place-items:center;
}
.content:hover .cntNav{
    display:block;
    opacity:1;
    visibility:visible;
}
.cntNav{
    position:absolute;
    width:100%;
    /* display:none;
    opacity:0;
    visibility:hidden; */
    transition:0.2s linear;
}
.cntNav>button{
    position:absolute;
    border:none;
    background:var(--background);
    width:21px;
    height:21px;
    border-radius:50px;
    display:grid;
    place-content:center;
    place-items:center;
    color:var(--color);
    z-index:1;
}
.dots{
    position:absolute;
    bottom:-5%;
    width:100%;
    display:flex;
    place-content:center;
    place-items:center;
    margin:4px 0px;
}
.dots>span{
    width:6px;
    height:6px;
    margin:0px 3px;
    border-radius:50px;
    background:#a8a8a8;
    transition:0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.comments{
    /* padding:4px 15px; */
    margin-bottom:5px;
}
.comment{
    display: flex;
    font-size:14px;
    margin:3px 0px;
    place-content:center;
}
.comment span{
    margin-right:5px;
}
.comment a{
    font-weight:550;
}
.comment a:hover{
    text-decoration:underline;
}
.comment>p{
    font-size:0.9em;
    width:98%;
}
.comment>div{
    width:2%;
}
.bottomBar{
    padding:2px 15px;
}
.interactions{
    position:relative;
    display:flex;
    margin-bottom:1px;
    padding:2px 0px;
}
.interactions>div{
    display:flex;
}
.interactions button{
    width:32px;
    height:32px;
    /* display:grid;
    place-content:baseline center; */
    font-size:1.2em;
    background:none;
    margin-right:4px;
    border-radius:30px;
}
.date{
    font-size:0.8em;
    margin:8px 0px;
}
.postCmt{
    padding:12px 15px;
    border-top:1px solid var(--hove);
    display:flex;
    place-items:center;
}
.postCmt textarea{
    min-height:30px;
    max-height:100px;
    resize:none;
    border:none;
    width:89%;
    outline:none;
    font-size:14px;
}
.postCmt button{
    width:11%;
    color:#0095f6;
    font-weight:600;
    height:30px;
    background:none;
    font-size:14px;
}
.tag{
    position:absolute;
    width: fit-content;
    text-align:center;
    background:#000000cc;
    border-radius:3px;
    font-size:14px;
    font-weight:600;
    display:none;
    transition:0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.tag a{
    padding:5px 8px;
    display:block;
    width:fit-content;
    height:100%;
    color: #fff;
    position:relative;
}
.tag>a>div{
    border-color: transparent transparent rgba(0,0,0,.85);
    border-width: 0 6px 6px;
    top: -5px;
    border-style: solid;
    height: 0;
    left: 50%;
    margin-left: -6px;
    position: absolute;
    width: 0;
}
.hasTag{
    position:absolute;
    bottom:1%;
    left:2%;
    background:#000000cc;
    display:flex;
    place-content:center;
    place-items:center;
    width:30px;
    height:30px;
    /* padding:3px 5px; */
    font-size:0.87em;
    border-radius:50px;
    color:#fff;
}
.likedHeart{
    position:absolute;
    color:#fff;
    font-size:4em;
    background:none;
    display:none;
}
.likedHeart i{
    text-shadow:0px 0px 9px #0000005e;
}
.dolikeanimation{
    animation:liked 1s cubic-bezier(0.65, 0.05, 0.36, 1) backwards;
    display:unset !important;
}
@keyframes liked{
    0%,100%{
        opacity:0;
        transform:scale(0);
    }
    16%{
        opacity:0.9;
        transform:scale(1.45);
    }
    35%{
        transform:scale(0.9);
    }
    50%,85%{
        opacity:0.9;
        transform:scale(1);
    }
}
@media only screen and (max-width:1250px){

}
@media only screen and (max-width:480px){
  
}
</style>

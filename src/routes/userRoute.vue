<template>
  <div class="home">
      <div v-if="userdata" class="wrap"> 
        <div class="userInt">
            <div class="first">
                <span class="grad">
                    <v-lazy-image :src="cleanImage(userdata.img)" :src-placeholder="``"/>
                </span>
                <!-- <h4>User at</h4> -->
            </div>
            <div class="interwrap">
                <div class="inter">
                    <p>{{userdata.at}}</p>
                    <div>
                        <button style="min-width:45%;">Message</button>
                        <button style="min-width:31%;"> <i class="fa fa-user"></i><i style="font-size:0.7em;margin:0px 3px;" class="fa fa-check"></i></button>
                        <button style="min-width:14%;"> <i class="fa fa-caret-down"></i></button>
                        <button style="min-width:14%;border:none;border-raduis:50%;"><i class="fa fa-ellipsis-h"></i></button>
                    </div>
                </div>
                <div class="sum">
                    <p> <span>{{postCount(userdata.posts)}}</span> posts</p>
                    <p> <span>{{userdata.followers.length}}</span> followers</p>
                    <p> <span>{{userdata.isFollowing.length}}</span> following</p>
                </div>
                <p class="usernickname">{{userdata.nickname}}</p>
                <p class="bio raw">{{userdata.bio}}</p>
            </div>
        </div>
        <div class="statuses">
            <status :dimensions="[75,75]" :title="true"/>
        </div>
        <div class="postss">
            <div class="post_bar">
                <button @click="tab='p'" :class="(()=>{if(tab=='p') return 'active'})()"> <i class="fa fa-th"></i>POSTS</button>
                <button @click="tab='t'" :class="(()=>{if(tab=='t') return 'active'})()"> <i class="fa fa-id-badge"></i>TAGGED</button>
            </div>
            <div class="tabs">
                <div v-if="tab=='p'" class="userposts">
                    <div v-for="(post,l) in userdata.posts" :key="l">
                        <postthumb v-for="(p,i) in post" :key="i" :url="p.cnt"  :class="(()=>{if(i==0||i==1) return 'extmargin thumb'; return 'thumb'})()"/>
                    </div>
                </div>
                <div v-if="tab=='t'" class="userposts">
                    <div v-for="(post,l) in userdata.tags" :key="l">
                        <postthumb v-for="(p,i) in post" :key="i" :url="p.cnt"  :class="(()=>{if(i==0||i==1) return 'extmargin thumb'; return 'thumb'})()"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>


<script>
import postthumb from '@/components/postthumb.vue'
import VLazyImage from "v-lazy-image";
import status from '@/components/status.vue'
import {cleanImage,getUser} from "@/dataParser/cleaners.js";
export default {
  name: 'userRoute',
  components:{
    status,
    postthumb,
    VLazyImage
  },
  props: {
      user:Object
  },
  data(){
    return{ 
        userdata:null,
        tab:'p'
    }
  },
  methods: {
      cleanImage(p){
          return cleanImage(p)
      },
      getUser(){
          return getUser(this.$store.state.route.params.id,this.$store.state.users)
      },
      groupItems(arr, size) {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size))
    },
    postCount(arr){
        let i=0;
        for(let t=0;t<arr.length;t++){
            i+=arr[t].length;
        }
        return i;
    }
  },
  mounted() {
    if(this.$store.state.route.params.data){
    this.userdata=this.$store.state.route.params.data;
    this.userdata.posts=this.$store.state.feeds.map((e)=>{if(e.owner.at==this.userdata.at) return e}).filter(e=>e!=undefined);
    this.userdata.tags=this.$store.state.feeds.map((feed)=>{ 
        return feed.cnt.map((e)=>{ if(e.tags.length!=0&&e.tags.find((tag)=>tag.user.at==this.userdata.at)) return e}).filter((e)=>e!=undefined);
    }).filter((e)=>e.length!=0);
    this.userdata.tags=this.groupItems(this.userdata.tags,3)
    this.userdata.posts=this.groupItems(this.userdata.posts,3)
    return 0;
    }
    this.userdata=this.getUser()
    this.userdata.posts=this.$store.state.feeds.map((e)=>{if(e.owner.at==this.userdata.at) return e}).filter(e=>e!=undefined);
    this.userdata.tags=[...this.$store.state.feeds].map((feed)=>{ 
        let nf=Object.assign({},feed);
        nf.cnt.map((e)=>{ if(e.tags.length!=0&&e.tags.find((tag)=>tag.user.at==this.userdata.at)) return e}).filter((e)=>e!=undefined);
        return nf;
    }).filter((e)=>e!=undefined);
    this.userdata.posts=this.groupItems(this.userdata.posts,3)
    this.userdata.tags=this.groupItems(this.userdata.tags,3)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap{
    width:70%;
    /* width:890px; */
    /* background:red; */
    margin:auto;
}
.userInt{
    display:flex;
}
.userInt img,.statuses img{
    border-radius:50%;
}
.interwrap,.first{
    padding:0px 42px;
}
.first{
    display: grid;
    place-items: start;
    margin:0px 22px;

}
.first>span{
    margin-bottom:8px;
    padding:4px;
}
.first img{
    width:143px;
    height:143px;
    /* width:145px;
    height:145px; */
}
.first h4{
    font-size:1.2em;
    font-weight:400;
}
.inter{
    display:flex;
    margin-bottom:20px;
    place-items:center;
    margin-top:13px;
    /* background:yellow; */
}
.inter>p{
    margin-right:25px;
    font-size:1.7em;
    font-weight:lighter;
}
.inter>div{
    display:flex;
    /* background:red; */
}
.inter button{
    /* background:red; */
    margin-right:13px;
    font-size:0.91em;
    font-weight:500;
    padding:3px 5px;
    background:none;
    border-radius:2px;
    /* background:var(--background); */
    border:1px solid var(--shadowcolor);
}
.sum{
    display:flex;
    margin-bottom:22px;
}
.sum p{
    margin-right:20px;
}
.sum span{
    font-weight:500;
}
.usernickname{
    font-size:1.1em;
    font-weight:500;
    margin-bottom:5px;
}
.bio{

}
.statuses{
    margin:30px 0px;
}
.postss{
    margin:65px 0px;
}
.post_bar{
    /* background:green; */
    width:100%;
    border-top:1px solid #dbdbdb;
    text-align:center;
}
.post_bar>button>i{
    margin-right:3px;
}
.post_bar>button{
    color:var(--grey);
    margin-right:20px;
    padding:12px 5px;
    background:none;
}
.active{
    border-top:1px solid #000;
}
.tabs{

}
.userposts>div{
    display:grid;
    width:100%;
    margin-bottom:18px;
    height:270px;
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-gap: 10px;
}
.thumb{
    width:100%;
    border-radius:3px;
}
.extmargin{
    margin-right:18px;
}
/* breaks to mobile 730px */
@media only screen and (max-width:1250px){
.wrap{
    width:80%;
}
}
@media only screen and (max-width:970px){
.wrap{
    width:90%;
}
}
@media only screen and (max-width:480px){
  
}
</style>

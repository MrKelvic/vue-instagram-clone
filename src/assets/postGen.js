const fs=require('fs');
// console.log(fs)
const users=require('../localedata/users.js').users;
let exclude=['log.png','_bitmoji.png','bitmoji.png','kdog.png','kflirt.png','kmed.png','knut.png','kpixel.png'];
for(let i=1;i<=12;i++){
    exclude.push(`${i}.png`);
}
let postSource =fs.readdirSync('./').filter((e)=>!exclude.includes(e)&&['png','jpeg','gif','jpg','mp4'].includes(e.substring(e.indexOf('.')+1)));
console.log(postSource)

let rand=(max)=>Math.floor(Math.random()*max);
let randUser=()=>users[rand(users.length)];

function comment(id,owner){
    return{
        id:`c-${owner.at}-${id}`,
        owner:owner,
        txt:`test Hey there comment number ${id}`,
        likes:0,
        replies:[],
        time:new Date()
    };
}
// randUser
function post(options){
    options={
        maxTags:options.maxTags||2,
        commentsMaxDept:options.commentsMaxDept||2,
        maxComents:options.maxComents||10,
        maxPerPost:options.maxPerPost||1,
        owner:options.owner||{}
    }
    return {
        cnt:(()=>{
                let arr=[]
                let max=rand(options.maxPerPost);
                for(let i=0;i<=max;++i){
                    let index =rand(postSource.length)
                    let p='_'+postSource[index]
                    arr.push(
                        {   
                            id:`p-${options.owner.at}-${rand(Date.now()+i)}`,
                            url:p,
                            type:['png','jpeg','gif','jpg'].includes(p.substring(p.indexOf('.')+1))?'imge':'video',
                            tags:(()=>{
                                let arr=[];
                                let nmax=rand(options.maxTags);
                                for(let i=0;i<=nmax;i++){
                                    arr.push({
                                        user:randUser(),
                                        cordinates:[`${rand(80)}%`,`${rand(80)}%`]
                                    })
                                }
                                return arr;
                            })(),
                            location:'Takoradi,Ghana',
                        }
                    )
                }
                return arr;
            })(),
        comments:(()=>{
            let arr=[];
            let max=rand(options.maxComents);
            for(let i=0;i<=max;i++){
                arr.push(comment(i,options.owner));
                let maxCom=rand(options.commentsMaxDept);
                for(let x=0;x<maxCom;x++){
                    arr[i].replies.push(comment(x,randUser()))
                }
            }
            return arr;
        })(),
        owner:options.owner,
        time:new Date()
    };
}
function getFeed(cnt){
    if(!cnt) cnt=20;
    let options={
        maxTags:2,
        commentsMaxDept:2,
        maxComents:10,
        maxPerPost:3,
        owner:{}
    };
    let feed=[];
    for(let x=0;x<cnt;x++){
        options.owner=randUser()
        feed.push(post(options))
    }
    return feed;
}

function loadData(start,cnt){
    let init=[
        {
            cnt:(()=>{
                let arr=[]
                for(let i=1;i<=12;i++){
                    arr.push({
                        id:`p-easteregg-${rand(Date.now()+i)}`,
                        type:'imge',
                        url:`_${i}.png`,
                        location:'Takoradi,Ghana',
                        tags:[]
                    })
                }
                return arr;
            })(),
            comments:[{
                id:`c-easteregg-1`,
                owner:randUser(),
                txt:`I built Twitter too`,
                likes:0,
                replies:[],
                time:new Date()
            }],
            owner:users[0],
            time:new Date()
        }
    ]
    try {
        if(!start){
            let alreadyExists=JSON.parse(fs.readFileSync('../localedata/feeds.json','utf-8'))
            alreadyExists=[...init,...alreadyExists,...getFeed(cnt)]
            fs.writeFileSync('../localedata/feeds.json',JSON.stringify(alreadyExists))
        }else{
            let alreadyExists=[...init,...getFeed(cnt)]
            fs.writeFileSync('../localedata/feeds.json',JSON.stringify(alreadyExists))
        }
    } catch (error) {
        console.log(error)
    }
}
loadData(true,100)


// fs.

// console.log(feed)
// console.log('/////////////////////////////////////////////////')
// console.log(feed[42])
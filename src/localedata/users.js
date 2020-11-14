let users=[
    {
        at:'mr.kelvic',
        nickname:'Kelvic',
        img:`_bitmoji.png`,
        bio:`Kelvic's bio lol`,
        isFollowing:true,
        followers:Math.floor(Math.random()*100),
        status:[],
    },
    {
        at:'kelvic zombie',
        nickname:'test Nickname',
        img:`_kpixel.png`,
        bio:`I'm kelvic's zombie`,
        isFollowing:false,
        followers:Math.floor(Math.random()*100),
        status:[],
    },
    {
        at:'ghost',
        nickname:'mr ghost',
        img:`_kscare.png`,
        bio:'This is a bio',
        isFollowing:false,
        followers:Math.floor(Math.random()*100),
        status:[],
    }, {
        at:'meditator',
        nickname:'mr meditator',
        img:`_kmed.png`,
        bio:`This meditator's  bio`,
        isFollowing:false,
        followers:Math.floor(Math.random()*100),
        status:[],
    },
    {
        at:'doglover',
        nickname:'mr mr',
        img:`_kdog.png`,
        bio:`I love dogs`,
        isFollowing:false,
        followers:Math.floor(Math.random()*100),
        status:[],
    },
    {
        at:'smile',
        nickname:'mr meditator',
        img:`_knut.png`,
        bio:`Love to smile`,
        isFollowing:false,
        followers:Math.floor(Math.random()*100),
        status:[],
    },{
        at:'wink',
        nickname:'mwink',
        img:`_kflirt.png`,
        bio:`Wink wink`,
        isFollowing:false,
        followers:Math.floor(Math.random()*100),
        status:[],
    }
]
users.map((e,index)=>{
    e.id=e.at+Date.now()+index;
    e.followers=users.map(el=>el.at).filter(el=>el!=e.at);
    e.isFollowing=e.followers;
    return e;
})
module.exports={users}
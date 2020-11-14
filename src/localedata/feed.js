
let feed=[
    {
        cnt:[
            {
                type:'imge',
                url:'_4.jpg',
            },
            {
                type:'imge',
                url:'_5.jpg',
            }
        ],
        comments:[{
            owner:'user',
            txt:`Assasin's creed`
        }],
        saved:true,
        liked:false,
        tags:[],
        owner:null,
    },
    {
        cnt:[
            {
                type:'imge',
                url:'_1.jpg',
            }
        ],
        comments:[{
            owner:'user',
            txt:' Frowns, null faces and confused faces are all part of a week of ups and downs but making it to the weekend and realizing how God took care of you through it all only brings you to smile and be grateful.'
        }],
        saved:false,
        liked:false,
        tags:[],
        owner:null,
    },
    {
        cnt:[
            {
                type:'imge',
                url:'_2.jpg',
            }
        ],
        comments:[{
            owner:'user',
            txt:'Hey there caption number'
        }],
        saved:false,
        liked:true,
        tags:[],
        owner:null,
    },
    {
        cnt:[
            {
                type:'imge',
                url:'_3.jpg',
            }
        ],
        comments:[{
            owner:'user',
            txt:'Hey there caption number'
        }],
        saved:true,
        liked:false,
        tags:[],
        owner:null,
    },
]

/*
        ///User
         {
            at:'Test',
            nikcname:'test Nickname',
            img:null,
            bio:'This is a bio',
            post:ArrayOfPosts,
            following:ArrayOfUsers,
            followers:ArrayOfUsers,
            status:[
                {
                    type:post,
                    postId:postid
                },
                {
                    type:img,
                    url:relLink
                },
                {
                    type:vid,
                    url:relLink
                }
            ],
        }


        /////post
      {
        cnt:[
            {
                type:'imge',
                url:'_3.jpg',
            },
            {
                type:'video',
                url:'_3.jpg',
            }
        ],
        comments:[{
            owner:'user',
            txt:'Hey there caption number',
            likes:0,
            replies:[__self],
            time:time()
        }],
        tags:[{
            user:userName,
            cordinates:[x,y]
        }],
        owner:{
            user:userName,
            link:relLink
        },
    },

*/

module.exports={feed};
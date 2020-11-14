function cleanImage(p){
    // console.log(require)@/assets/${p}`
    if ([undefined, null].includes(p)) return null;
    // console.log(res)
    if (p[0] == '_'){
        p=p.substring(1)
        let res=require(`@/assets/${p}`)
        return res
    }
    return p;
}

let getUser=(at,dataSet)=>dataSet.find(e=>e.at==at);

module.exports = {cleanImage,getUser}
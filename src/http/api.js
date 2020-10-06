import instance from "./http";

function apiIndex(htype) {
    let params={htype:htype};
    return new Promise((resolve, reject) =>{
        instance.get('api/index', {
            params
        }).then(res=>{
            resolve(res);
        }).catch(error=>{
           reject(error);
        })
    } )
}

function apiDetail(hid) {
    return new Promise((resolve, reject) =>{
        instance.get('api/index/'+hid).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}


export {apiIndex,apiDetail}
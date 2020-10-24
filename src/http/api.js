import instance from "./http";
//主页数据获取
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
//详情页数据获取
function apiDetail(hid) {
    return new Promise((resolve, reject) =>{
        instance.get('api/index/'+hid).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}
//列表页数据获取
function apiList(params) {
    return new Promise((resolve, reject) =>{
        instance.get('api/list',{params}).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}
//用户登录
function apiLogin(params) {
    return new Promise((resolve, reject) =>{
        instance.post('api/login',params).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}
//用户注册
function apiRegister(params) {
    return new Promise((resolve, reject) =>{
        instance.post('api/user',params).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}
//获取用户信息
function apiGetUser() {
    return new Promise((resolve, reject) =>{
        instance.get('api/user/1').then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}
//获取收藏信息
function apiCollection() {
    return new Promise((resolve, reject) =>{
        instance.get('api/collection').then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}
//修改收藏信息
function apiSaveCollection(params) {
    return new Promise((resolve, reject) =>{
        instance.post('api/collection',params).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}
//获取酒店房间信息
function apigetHotelRoom(params) {
    return new Promise((resolve, reject) =>{
        instance.get('api/room', {params}).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}
//读取单个酒店房间信息
function apigetRoomItem(rid) {
    return new Promise((resolve, reject) =>{
        instance.get('api/room/'+rid).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}
//查询对应类型的订单信息

function apigetOrders(params) {
    return new Promise((resolve, reject) =>{
        instance.get('api/orders', {params}).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}
//读取订单页面信息
// function apigetOrderInfo() {
//     return new Promise((resolve, reject) =>{
//         instance.get('api/orders', ).then(res=>{
//             resolve(res);
//         }).catch(error=>{
//             reject(error);
//         })
//     } )
// }
//上传订单信息
function apisetOrderinfo(params) {
    return new Promise((resolve, reject) =>{
        instance.post('api/orders',params).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    } )
}

export {apiIndex,apiDetail,apiList,apiLogin,apiRegister,apiGetUser,apiCollection,apiSaveCollection,apigetHotelRoom,apigetRoomItem,apigetOrders,apisetOrderinfo}
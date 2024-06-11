let promise = new Promise((ressolve,reject)=> {
    let a=5
    if(a==4){
        ressolve("Passed")
    }else{
        reject("Failed")
    }
})
promise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})
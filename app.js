const promise1 = new Promise((res,rej)=>{
    const name='neraj';
    if(name=='neeraj'){
        res('valid');
    }else{
        rej('invalid');
    }
})

promise1.then(
    (valid)=>{
        console.log(`its ${valid}, name is neeraj`);
    },
    (error)=>{
        console.log(`its ${error}, name is not neeraj`);
    }
)
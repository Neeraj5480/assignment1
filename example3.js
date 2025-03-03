
async function message(num){
    if(num>0){
        return('valid');
    
    }else{
        return('invalid')
    }

}

message(1).then(

    (val)=>{
        console.log(val);
    },
    (err)=>{
        console.log(err);
    }
)
function output(num){
    console.log('hello neeraj'+num);
}
let count=0;
for(let i=0;i<5;i++){
    count++;
    output(count);

}
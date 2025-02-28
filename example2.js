
const files = require('fs');
const folder = 'public';
if(!files.existsSync(folder)){
    files.mkdirSync(folder);
    console.log('folder created');

}else{
    console.log('folder exists');
}
const folderpath = `./${folder}`;
files.writeFile(folderpath+'index.html','<h1>HELLO NEERAJ</h1>',(err)=>{
    if(err){
        console.log('error');
    }else{
        console.log('files created');

    }
})






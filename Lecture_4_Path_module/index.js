console.log("path module");

import path from 'path'
//join two or more file:

const fullPath = path.join('/path','index.py','file.java');
console.log("files join",fullPath);

//index.py, test.java 

//absolute or original path of a file we are working in : 

const absolutePath=path.resolve();
console.log(absolutePath); 

//extension name
const extname=path.extname("resume.pdf");
console.log("extname=",extname)
if(extname==".pdf"){
    console.log("ok");
}
else{
    console.log("not suppported");
}

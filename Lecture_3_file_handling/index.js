import {readFile,writeFile,appendFile,mkdir} from "fs/promises"
//read file 
const read_file=async (filename)=>{
    const data=await readFile(filename,'utf-8');
    console.log(data);
}

// read_file('sample.txt')

//create file:
const create_file=async(filename,content)=>{
    await writeFile(filename,content);
    console.log("file created successfuly");
    }

create_file("vishal.txt","vishal is a web devveloper");

//add content to file:

const append_file=async(filename,content)=>{
    await appendFile(filename,content);
    console.log("extra content added successfully");
}

append_file("vishal.txt","hi vishal lodhi");

// //created folder or directory

// const create_dir=async(dir)=>{
//     await mkdir(dir);

// }

// create_dir("components");

// src/components/java 

//recursive call karna padega
const create_dir=async(dir)=>{
    await mkdir(dir,{recursive:true});

}
create_dir('src/components/java');


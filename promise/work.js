const {readFile, appendFile } = require("fs")
// const {readFile} = require("fs").promises // auto promisify readFile function under same name 
// const readFilePromise = util.promisify(readFile) // promise created in different name 
// also these promises doesn't have reject bettor instead they raises error in failure cases 
// so while dealing with these promiese we should write them in try catch block

const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        if(!path){
            reject(new Error("path not give"))
        }
        else{
            readFile(path,"utf-8",(error,data)=>{
                if(error) reject(new Error("file cant' be opened"))
                else resolve(data)
            })
        }
    })
}
const putText = (path,data)=>{
    return new Promise((resolve,reject)=>{
        if(!path){
            reject(new Error("path not provided"))
        }   
        else{
            appendFile(path,data,(error)=>{
                if(error){
                    reject(new Error("error writing into file"))
                }
                else{
                    resolve()
                }
            })
        }
    })
}
getText("./file1.txt")
    .then((data)=>{
        console.log("done reading file1")
        // returning this makes next reading file to weight for this writing to be done 
        return putText("./result.txt",data)
    })
    .then(()=>{
        console.log("reading fil2")
        return getText("./file2.txt")
    })
    .then(data=>{
        console.log("done reading file2")
        putText("./result.txt",data)
    })
    .catch((error)=>{
        console.log(error)
    })

// synchronously written code would be (better suited for util 's promises that doesnt' rejects instead raises error)
const work = async()=>{
    try{
        let data = await getText("./file1.txt") 
        // argument for resolve is returned 
        await putText("./result.txt",data)
        data = await getText("./file2.txt")
        await putText("./result.txt",data)
    }
    catch(error){
        console.log(error)   
    }
}
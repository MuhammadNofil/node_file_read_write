const fs=require('fs')
// reading file
fs.readFile('./docs/blog.txt',(err,data)=>{
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})

// writing file
fs.writeFile('./docs/blog.txt',"helloworld",()=>{
    console.log("file has been written")
})
fs.writeFile('./docs/blog2.txt',"helloworld",()=>{
    console.log("file has been written")
})
// directories
if(!fs.existsSync('./assets')){
fs.mkdir('./assets',(err)=>{
    if (err) {
        console.log(err)
    }
    console.log("folder created")
})}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log("folder deleted")
    })
}

// deleting files
if (fs.existsSync('./docs/deleteitem.txt')) {
    fs.unlink('./docs/deleteitem.txt',(err)=>{
        if (err) {
            console.log(err)
        }
        console.log("file deleted")
    })
}
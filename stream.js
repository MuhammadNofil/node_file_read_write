const fs=require('fs')

const readstream=fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'})
const writestream=fs.createWriteStream('./docs/blog4.txt')
// stream
// readstream.on('data',(chunk)=>{
//     console.log('new chunk')
//     console.log(chunk)
//     writestream.write("new chunk")
//     writestream.write(chunk)
// })

// pipe
readstream.pipe(writestream)

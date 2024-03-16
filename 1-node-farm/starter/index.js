const fs = require('fs')
const http = require('http')
const url = require('url')

////////////////////////////////
// file read

// const fileData = fs.readFileSync('./txt/input.txt', 'utf-8')

// fs.writeFileSync('./txt/output.txt', `This is the extra message. \n ${fileData}`)

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     console.log('data1', data1)
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log('data2', data2)
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log('data3', data3)
//             fs.writeFile('./txt/final.txt', `${data2} ${data3}`, (err) => {
//                console.log('data written')
//             })
//         })
//     })
// })



//////////////////////////////////////////////////
//server
const server = http.createServer((req, res) => {
    const pathName = req.url

    if (pathName === '/' || pathName === '/overview') {
        res.end('this is overview')
    } else if (pathName === '/products') {
        res.end('this is products')
    } else {
       res.writeHead(404, {
        "content-type": 'text/html',
        "custom-header": 'my-header'
       })
       res.end('<h1>page not found</h1>')
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('server running on port 8000')
})








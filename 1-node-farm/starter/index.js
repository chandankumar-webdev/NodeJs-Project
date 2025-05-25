const fs = require('fs')
const http = require('http')
const url = require('url')

//////////////////////////////////
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
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const productData = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8')
console.log('dir---------', __dirname)
const parsedData = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url

    if (pathName === '/' || pathName === '/overview') {
        const updateProductData = productData.replace('{%PRODUCTNAME%}', parsedData[0].productName)
        res.end(updateProductData)
    } else if (pathName === '/products') {
        res.end('this is products')
    } else if (pathName === '/api') {
       res.writeHead(200, {
        "content-type": 'application/json'
       })
       res.end(data)
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








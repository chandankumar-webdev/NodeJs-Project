const fs = require('fs')
// const fileData = fs.readFileSync('./txt/input.txt', 'utf-8')

// fs.writeFileSync('./txt/output.txt', `This is the extra message. \n ${fileData}`)

fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    console.log('data1', data1)
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log('data2', data2)
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            console.log('data3', data3)
            fs.writeFile('./txt/final.txt', `${data2} ${data3}`, (err) => {
               console.log('data written')
            })
        })
    })
})

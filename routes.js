const fs = require('fs')

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if(url === '/message' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })

    return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt', message , (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })
        })
    }
    if(url === '/home') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Home Page</title></head>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>')
        return res.end()
    }
    else if(url === '/about') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>About Page</title></head>')
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>')
        return res.end()
    }
    else if(url === '/node') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>My Second Node js Page</title></head>')
        res.write('<body><h1>Welcome to my Node Js project!</h1></body>')
        res.write('</html>')
        return res.end()
    }
    else if(url === '/') {
        fs.readFile('message.txt', {encoding: 'utf-8'}, (err, data) => {
            if(err) { console.log(err) }
            res.setHeader('Content-Type', 'text/html')
            res.write('<html>')
            res.write('<head><title>My First Node js Page</title></head>')
            res.write(`<body>${data}</body>`)
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html>')
            return res.end()
        })
    }
}

module.exports = requestHandler

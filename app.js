const http = require('http')

const server = http.createServer((req, res) => {
    // console.log("Chetan Singh")
    const url = req.url
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
    else {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>My First Node js Page</title></head>')
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('</html>')
        return res.end()
    }
    
})

server.listen(4000)
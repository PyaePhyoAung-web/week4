const http = require('http');
var port = process.env.PORT || 8000;
http.Server((req, res) => {
    if (req.url === '/result4/') {
      let CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test'
      };
      const result = {
        message: 'pyaephyoaung',
        'x-result': req.headers['x-test'],
      };
      let body = '';
      req
        .on('data', data => (body += data))
        .on('end', () => {
          result['x-body'] = body;
          res.writeHead(200, {... CORS, 'Content-Type': 'application/json' });
          res.end(JSON.stringify(result));
        });
    }
  })
  server.listen(port,()=>{
      console.log('Server is running')});

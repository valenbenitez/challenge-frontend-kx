const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults({
  static: './build'
});
const router = jsonServer.router('./db.json');

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
const Koa = require('koa');
const app = new Koa();
const  serve = require("koa-static");
app.use(serve(__dirname + "/dist",{ extensions: ['html', 'css', 'js', 'map']}));
app.listen(3000);

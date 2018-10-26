
const Koa = require('koa');
const response = require('./store');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.use(async (ctx, next) => {
	if (ctx.request.path === '/') {
		ctx.response.body = '<h1>Welcome</h1>';
	} else {
		await next();
	}
});

app.use(async (ctx, next) => {
	if (ctx.request.path === '/home') {
		ctx.response.body = response;
	} else {
		await next();
	}
});


// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
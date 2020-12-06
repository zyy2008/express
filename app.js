import express from 'express';
import './mongodb/db.js';
import config from 'config-lite';
import router from './routes/index.js';
import cookieParser from 'cookie-parser'
import session from 'express-session';
import connectMongo from 'connect-mongo';
import winston from 'winston';
import expressWinston from 'express-winston';
import history from 'connect-history-api-fallback';
import chalk from 'chalk';
import expressJwt from "express-jwt"
// import Statistic from './middlewares/statistic'

const app = express();

app.all('*', (req, res, next) => {
	const {
		origin,
		Origin,
		referer,
		Referer
	} = req.headers;
	const allowOrigin = origin || Origin || referer || Referer || '*';
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type, token, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", 'Express');
	if (req.method == 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
});

app.use(expressJwt({
	secret: 'secret12345', // 签名的密钥 或 PublicKey
	algorithms: ["HS256"],
	credentialsRequired: false
}).unless({
	path: ['/user/login'] // 指定路径不经过 Token 解析
}))


router(app);
app.use(history());
app.use(express.static('./public'));
app.listen(config.port, () => {
	console.log(
		chalk.green(`成功监听端口：${config.port}`)
	)
});
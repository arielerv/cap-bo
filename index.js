require('dotenv').config();
const {NODE_ENV, PORT, MORGAN_FORMAT, SERVE_STATIC} = process.env;

const path = require('path');
const app = require('connect')();
const winston = require('winston');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});
app.use(require('morgan')(MORGAN_FORMAT));
app.use(require('compression')());
app.use(require('serve-static')(path.join(__dirname, SERVE_STATIC)));

if (NODE_ENV === 'development') {
    const config = require('./webpack.config');
    const compiler = require('webpack')(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}

require('http').createServer(app).listen(
    PORT,
    () => logger.info(`Server started at port ${PORT}`)
);

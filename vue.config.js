const data = require('./data/index.json');
const cityData = require('./data/city.json');
const detailData = require('./data/detail.json');
module.exports = {
    //     baseUrl: '/',
    //     outputDir: 'dist',
    //     assetsDir: 'assets',
    //     lintOnSave: false,
    devServer: {
        // open: true,
        // host: 'localhost',
        port: '8080',
        // https: false,
        // hotOnly: false,
        // proxy: {
        //     //配置跨域
        //     '/api': {
        //         target: 'http://localhost/',
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
        before(app) {
            // http: //localhost:8080/test,
            app.get('/data', (req, res) => {
                res.json(data);
            });
            app.get('/cityData', (req, res) => {
                res.json(cityData);
            });
            app.get('/detailData', (req, res) => {
                res.json(detailData);
            });
        }
    }
};
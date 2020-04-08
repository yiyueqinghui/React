var path = require('path');
var htmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',   //环境配制
    entry:'./js/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|jpeg|png|gif|webp)$/,
                loader:"url-loader?limit=1024"   //限制图片大小，如果大于1024字节（1k），则不打包进入js。
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    //插件
    plugins:[
        new htmlwebpackPlugin({
            template:'./index.html'
        })
    ]
}
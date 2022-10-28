module.exports = {
    //エントリーポイント
    entry: "./src/index.js",

    //ファイルの出力設定
    output: {
        //出力先のパスを設定
        path: `${__dirname}/dist`,
        //出力ファイル名
        filename:"bundle.js",
    },
    //production 本番
    mode: "development",

    //ローカルサーバーの設定
    devServer: {
        static: "dist",
        open: true,
    },
};
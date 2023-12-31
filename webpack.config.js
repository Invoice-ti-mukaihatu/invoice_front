const path = require("path");

module.exports = {
  // 開発用の設定
  mode: "development",
  // エントリーポイントを設定
  entry: "./src/index.tsx",
  // バンドル後のファイルの出力設定
  output: {
    // ファイルの出力先のディレクトリを指定する
    path: path.join(__dirname, "dist"),
    // 出力されるファイル名
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // TypeScriptファイルのコンパイルにts-loaderを使用
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        // CSSファイルの読み込みにstyle-loaderとcss-loaderを使用
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        //拡張子がpng,jpg,gif,svgを検知したら
        test: /\.(png|jpg|gif|svg)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              //[name]は画像名、[ext]は拡張子
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    // URL直書きでページ遷移するのに必須
    historyApiFallback: true,
    port: 4000,
  },
  // importの際に「extensions」の拡張子を省略する
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};

const path = require("path");
const fs = require("fs");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const pageDir = path.resolve(__dirname, "./src/page"); //page目录的绝对路径

/**
 * 读取每个page目录下的默认文件(index.tsx)
 * 返回多入口对象，为了方便配置，不必每次
 * 新增一个容器目录手动配置入口文件
 * 返回一个对象（键是模块名，值为绝对路径 eg:{'user':'/src/page/user/index.tsx'}）
 * @param {String} defaultName 默认文件名
 */
function loadEntry(defaultName = "index.tsx") {
  let multiEntry = {};
  let dirs = fs.readdirSync(pageDir);
  dirs.forEach(d => {
    let defaultFilePath = path.resolve(pageDir, d, defaultName);
    let { isDirectory } = fs.statSync(path.resolve(pageDir, d));
    let hasDefaultFile = fs.existsSync(defaultFilePath);
    if (isDirectory && hasDefaultFile) {
      multiEntry[d] = defaultFilePath;
    }
  });
  return multiEntry;
}

/**
 * 根据多入口对象返回模块插件数组
 * @param {Object} entries 多入口对象
 */
function loadTemp(entries, defaultName = "index.html") {
  let htmlPlugins = [];
  Object.keys(entries).forEach(key => {
    let template = path.resolve(pageDir, key, defaultName);
    if (fs.existsSync(template)) {
      htmlPlugins.push(
        new HTMLWebpackPlugin({
          template,
          filename: `${key}.html`,
          chunks: [key]
        })
      );
    }
  });
  return htmlPlugins;
}

let entries = loadEntry("index.tsx");
let templatePlugins = loadTemp(entries, "index.html");

let config = {
  mode: "development",
  entry: entries,
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: "ts-loader"
        },
        include: path.resolve(__dirname, "./src")
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "./src")
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: [
                path.resolve(__dirname, "./src/component/common.scss")
              ]
            }
          }
        ],
        include: path.resolve(__dirname, "./src")
      },
      {
        test: /\.(jpg|jpeg|png|bmp|gif)$/,
        use: {
          loader: "url-loader"
        }
      }
    ]
  },
  plugins: [
    //拷静态文件到打包目录
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./src/static"),
        to: path.resolve(__dirname, "./dist")
      }
    ])
  ].concat(templatePlugins)
};

module.exports = config;

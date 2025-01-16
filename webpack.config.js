const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const themename = 'poeticsoft-minimal-theme'
const destdir = path.join(__dirname, themename)
const themeplublic = '/wp-content/themes/' + themename

module.exports = env => { 

  const paths ={
    entryjs: './src/app/main.js',
    entryscss: './src/scss/main.scss',
    output: destdir  + '/app',
    public: themeplublic,
    cssfilename: 'main.css'
  }

  const mode = 'dev'

  return {
    context: __dirname,
    stats: 'minimal',
    watch: true,
    name: 'minimal',
    entry: {
      main: paths.entryjs,
      maincss: paths.entryscss
    },
    output: {
      path: paths.output,
      publicPath: paths.public
    },
    mode: mode == 'prod' ? 'production' : 'development',
    devtool: mode == 'prod' ? 'none' : 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [          
            { 
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ]
              }
            }
          ]
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            { 
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [
            { 
              loader: MiniCssExtractPlugin.loader
            },
            'style-loader',
            'css-loader'
          ]
        },
        // Assets
        {
          test: /\.(jpg|jpeg|png|gif|svg|woff|ttf|eot|mp3|woff|woff2)$/,
          type: 'asset/resource',
          generator: {
            emit: false,
            filename: content => { 

              return content.filename.replace(themename, '')
            }
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: paths.cssfilename
      })
    ],
    resolve: {
      extensions: ['.js'],
      alias: {
        ['assets']: path.resolve(destdir + '/assets'),
        ['fonts']: path.resolve(destdir + '/assets/fonts')
      }
    }
  }
}
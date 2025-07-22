const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const pluginname = 'poeticsoft-2025'
const destdir = path.join(__dirname, pluginname)
const themeplublic = '/wp-content/plugin/' + pluginname

module.exports = env => {  
                                                    
  const input = Object.keys(env)[2] || ''

  const params = input.split('-')
<<<<<<< HEAD
  const type = params[0] || 'block' // block 
  const name = params[1] || 'base' // base | etc.
  const mode = params[2] || 'dev' // dev | prod

  const paths = {
    output: destdir  + '/' + type + '/' + name,
=======
  const type = params[0] || 'apps' // apps | theme

  let unit, mode
  let paths = {
>>>>>>> 467a4b227d6c871c291dad6bd1ecbb0d07e514c6
    public: themeplublic,
    cssfilename: '[name].css'
  }
  let entry = {}
  let externals = {}  

  const wpexternals = {
    '@wordpress/blocks': {
      window: ['wp', 'blocks'],    
    },
    '@wordpress/block-editor': {
      window: ['wp', 'blockEditor'],    
    }
  }

<<<<<<< HEAD
  switch (type) {

    case 'block':
      
      paths.output = destdir  + '/' + type + '/' + name + '/build'

      entry = {
        editor: './src/' + type + '/' + name + '/editor.js',
        view: './src/' + type + '/' + name + '/view.js'
      }

      externals = wpexternals

      break;
  }

  const config = {
=======
  switch(type) {

    case 'apps':

      unit = params[1] || 'clouds' // clouds | rain | fire | 
      mode = params[2] || 'dev' // dev | prod
      
      paths.entryjs = './src/' + type + '/' + unit + '/main.js',
      // paths.entryscss = './src/' + type + '/' + unit + '/main.scss',
      paths.output = destdir  + '/' + type + '/' + unit

      break

    case 'theme':

      mode = params[1] || 'dev' // dev | prod
      
      paths.entryjs = './src/' + type + '/main.js',
      // paths.entryscss = './src/' + type + '/main.scss',
      paths.output = destdir  + '/' + type

      break
  }  

  return {
>>>>>>> 467a4b227d6c871c291dad6bd1ecbb0d07e514c6
    context: __dirname,
    stats: 'minimal',
    watch: true,
    name: 'minimal',
<<<<<<< HEAD
    entry: entry,
=======
    entry: {
      main: paths.entryjs,
      // maincss: paths.entryscss
    },
>>>>>>> 467a4b227d6c871c291dad6bd1ecbb0d07e514c6
    output: {
      path: paths.output,
      publicPath: paths.public,
      filename: '[name].js'
    },
    mode: mode == 'prod' ? 'production' : 'development',
    devtool: mode == 'prod' ? false : 'source-map',
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
          test: /\.(jpg|jpeg|png|gif|svg|woff|ttf|eot|mp3|woff|woff2|webm|mp4)$/,
          type: 'asset/resource',
          generator: {
            emit: false,
            filename: content => { 

              return content.filename.replace(pluginname, '')
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
<<<<<<< HEAD
        assets: path.resolve(destdir + '/assets'),       
        blocks: path.join(__dirname, pluginname, 'block'),       
        styles: path.join(__dirname, 'src', 'styles')
=======
        jscommon: path.join(__dirname, 'src/apps/common/js'),
        scsscommon: path.join(__dirname, 'src/theme/scss'),
        assets: path.resolve(destdir + '/assets'),
        fonts: path.resolve(destdir + '/assets/fonts')
>>>>>>> 467a4b227d6c871c291dad6bd1ecbb0d07e514c6
      }
    }
  }

  console.log(path.join(__dirname, pluginname, 'src', 'styles'))

  return config
}
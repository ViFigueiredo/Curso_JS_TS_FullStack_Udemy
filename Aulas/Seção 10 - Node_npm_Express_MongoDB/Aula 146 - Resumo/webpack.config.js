
// path é módulo do Node para diretórios
const path = require('path'); // CommonJS != Modules ES6

// Utilizando _dirname
module.exports = {
    mode: 'production',
    entry: './frontend/main.js', // entrada do arquivo JS principal
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js' //nome do arquivo que será gerado } // local de saída do bundle.js
    },
    module: {
        rules: [
            {
                exclude: /node_modules/, // remove a pasta do node da pesquisa do webpack/babel
                test: /\.js$/, // testa todos os arquivos .js
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            },
            {
                test: /\.css$/, // testa todos os arquivos .css
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    devtool: 'source-map' //mapeia os arquivos originais geradores do bundle.js
}

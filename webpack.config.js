// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

// export
module.exports = {
    // 파일을 읽어 들이기 시작하는 진입점 설정.
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정.
    output: {
        // node.js 에서 절대경로 요구.
        // __dirname => node.js 환경에서 global 하게 사용 가능한 변수.
        path: path.resolve(__dirname, 'dist'), // 절대경로 설정.
        filename: 'main.js',
        clean: true // build 시 기존 폴더 삭제.
    },

    plugins: [
        new HtmlPlugin({
            template: './index.html' // output에 명시된 main.js와 index.html을 병합해 줌.
        })
    ],

    devServer: {
        host: 'localhost'
    }
}
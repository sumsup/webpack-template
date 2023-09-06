// webpack 설정에 entry 를 main.js 로 설정 => main.js 에서 css import 함. => css 설정 적용.
// webpack이 main.js 를 읽어서 index.html에 적용. => dist에 배포.
// index.html에 별도로 <link>로 css 적용 하지 않아도 됨.
import '../scss/main.scss';

console.log('Webpack!');

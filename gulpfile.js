const { series, src, dest } = require('gulp');
let cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
// var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var useref = require('gulp-useref');
var svgSprite = require('gulp-svg-sprite');


function minifyСss() {
  return src('./src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        // .pipe(rename({suffix:'.min'}))
        .pipe(dest('dist/css/'));
}

function minifyJS() {
  return src(['./src/js/*.js', '!./src/js/edge.js'])
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(dest('dist/js/'));
}


function minifyHtml() {
  return src('./src/*.html')
        .pipe(useref())
        .pipe(htmlmin({collapseWhitespace: true }))
        .pipe(dest('dist/'));
}


function moveFonts() {
  return src('./src/fonts/**/*')
        .pipe(dest('dist/fonts'));
}

function moveImages(){
  return src('./src/img/**/*.+(png|jpg|jpeg|svg)')
        // .pipe(imagemin())
        .pipe(dest('dist/img'));
}

function moveSvg(){
  return src('./src/img/**/*.svg')
        .pipe(svgSprite({
          mode: {
            symbol: {
              sprite: "sprite.svg"
            }
          }
        }))
        .pipe(dest('dist/img'));
}
// Столкнулась с небольшим ступором, как уже в написанном коде поправить все иконки с img на use, не делая все это вручную. Понятно что используется следующая схема <svg width="18" height="18"><use xlink:href='путь к файлу sprite.svg#folder-open'/></svg>

exports.build = series(minifyСss, moveFonts, moveImages, moveSvg, minifyJS, minifyHtml);
exports.minifyJS = minifyJS;
exports.minifyHtml = minifyHtml;
exports.minifyСss = minifyСss;
exports.moveFonts = moveFonts;
exports.moveImages = moveImages;
exports.moveSvg = moveSvg;
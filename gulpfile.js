// 引入gulp模块
var gulp = require('gulp');

// 引入gulp-js压缩模块
var uglify = require('gulp-uglify');

// 引入gulp-js代码合并模块
var concat = require('gulp-concat');

// 引入gulp-css代码压缩模块
var cssnano = require('gulp-cssnano');

// 引入gulp-smushit(压缩图片，需要网络)
var smushit = require("gulp-smushit");

// 引入浏览器同步插件(browser-sync)
var browserSync = require('browser-sync');

// 引入less预编译模块
var less = require('gulp-less');

// js代码混淆
gulp.task('script',function(){
    // 第一步:去读取我将要压缩的代码
    gulp.src('./src/app/scripts/*.js')
    // 第二步:将读取到的js代码进行压缩
    // .pipe(concat("all.js"))
    // .pipe(uglify())
    // 第三步:将压缩过后的js代码保存到哪个文件夹中
    .pipe(gulp.dest('./dist/app/scripts'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// 对css的压缩
gulp.task('style',function(){
    gulp.src(['./src/app/styles/*.less','./src/app/styles/*.css'])
    .pipe(less())
    // .pipe(cssnano())
    .pipe(gulp.dest('./dist/app/styles'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// 图片压缩
// gulp.task('images',function(){
//     gulp.src(['./src/app/images/*.png','./src/app/images/*.jpg','./src/app/images/*.gif','./src/app/images/*.jpeg'])
//     // .pipe(imagemin())
//     .pipe(smushit({verbose: true}))
//     .pipe(gulp.dest('./dist/app/images'))
//     .pipe(browserSync.reload({
//       stream: true
//     }));
// });

// 4:HTML压缩
var htmlmin = require('gulp-htmlmin');
gulp.task('html',function(){
   var options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
}
    gulp.src('./src/app/*.html')
    // .pipe(htmlmin(options))
    .pipe(gulp.dest('./dist/app'))
    .pipe(browserSync.reload({
      stream: true
    }));

});

// 5:浏览器同步操作
gulp.task('servers',function(){
    // 在浏览器服务启动后，设置一个观察者，来监视文件的变动，如果文件发生了改变，就来重新执行对应的任务
    browserSync({
            server: {baseDir: ['dist/app']}

        }, function(err, bs) {

            console.log(bs.options.getIn(["urls", "local"]));
    });
 // 如果index.html 发生改变时，去执行html任务
    gulp.watch('./src/app/*.html',['html']);
    gulp.watch('./src/app/scripts/*.js',['script']);
    gulp.watch('./src/app/styles/*.less',['style']);
   });


// 设置一个主任务来执行多个子任务
gulp.task('mainTask',['html','script','style','servers']);













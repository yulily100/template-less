var gulp,connect;
    gulp = require('gulp');
    connect = require('gulp-connect');


//ローカルサーバー
gulp.task('connectDev',function(){
  connect.server({
    root: ['./'],   //ルートディレクトリ
    port: 8000,     //ポート番号
    livereload: true
  });
});

//htmlタスク
gulp.task('html',function(){
  gulp.src('./*.html')          //実行するファイル
    .pipe(connect.reload());    //ブラウザの更新
});

//ファイルの監視
gulp.task('watch',function(){
  gulp.watch(['./*.html'],['html']);    //htmlファイルを監視
});

gulp.task('default',['connectDev','watch']);
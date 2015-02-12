var gulp = require("gulp");
var less = require("gulp-less");
var browser = require("browser-sync");

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("less", function() {
  gulp.src("less/**/*less")
    .pipe(less())
    .pipe(gulp.dest("./css"))
    .pipe(browser.reload({stream:true}));
});

gulp.task("default",['server'], function() {
  gulp.watch("less/**/*.less",["less"]);
});
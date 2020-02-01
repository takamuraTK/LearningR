var gulp = require("gulp");
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");

gulp.task("ejs", (done) => {
  gulp
    .src(["view/ejs/**/*.ejs", "!" + "view/ejs/**/_*.ejs"])
    .pipe(ejs({}, {}, {ext:'.html'}))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("./view"));
  done();
});
var gulp        = require("gulp");
var del         = require("del");
// var webpack     = require("gulp-webpack");
var KarmaServer = require("karma").Server;

var babelify = require("babelify");
var browserify = require("browserify");
var buffer = require("vinyl-buffer");
var source = require("vinyl-source-stream");
// var uglify = require("gulp-uglify");

gulp.task("clean", function() {
  del.sync(["./build/**", "!build"]);
});

gulp.task("transpilejs", function() {
  var bundler = browserify("src/app.jsx");
  bundler.transform(babelify);
  bundler.bundle()
    .on("error", function (err) { console.error(err.toString()); })
    .pipe(source("bundle.js"))
    .pipe(buffer())
    // .pipe(uglify())
    .pipe(gulp.dest("build"));
});

gulp.task("copy", function() {
  return gulp.src(["./src/*.html", "./src/*.css"])
    .pipe(gulp.dest("./build/"));
});

gulp.task("build", [ "clean", "transpilejs", "copy" ]);

gulp.task("watch", function() {
  gulp.watch("./src/**/*", ["build"]);
});
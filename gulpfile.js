var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');

gulp.task('scripts', function() {
    var javaScriptFromCoffeeScript = gulp.src('src/coffee/*.coffee')
        .pipe(coffee());

    var js = gulp.src('src/js/*.js');

    return es.merge(javaScriptFromCoffeeScript, js)
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
   gulp.watch('src/js/*.js', ['scripts']);
   gulp.watch('src/coffee/*.coffee', ['scripts']);
});
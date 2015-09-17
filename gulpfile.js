var gulp = require('gulp'),
    gutil = require('gulp-util'),
    svgstore = require('gulp-svgstore'),
    path = require('path'),
    rsp = require('remove-svg-properties').stream;


gulp.task('svg', function(){
    return gulp.src('source/images/icons/*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rsp.remove({
        properties: [rsp.PROPS_FILL, rsp.PROPS_STROKE]
    }))
    .pipe(gulp.dest('source/images/'));
});


gulp.task('watch', function(){
    gulp.watch('source/images/*.svg', ['svg']);
});

gulp.task('default', ['svg'], function(){

});

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Simple watch task to check for changes in HTML and CSS file
gulp.task('watch', function(done) {
    browserSync.init({
	server: './',
	open: true
    }, function callback() {
	// watch index html and reload browsers 
	gulp.watch('./index.html', browserSync.reload);
	// watch css and injects it to page
	gulp.watch('./res/css/*', function() {
	    gulp.src('./res/css/*').pipe(browserSync.stream());
	});
	done();
    });
});

var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var watchify = require("watchify");
var tsify = require("tsify");
var gutil = require("gulp-util");
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

var paths = {
	pages: ['src/*.html']
};

var watchedBrowserify = watchify(browserify({
	basedir: '.',
	debug: true,
	entries: ['src/main.ts'],
	cache: {},
	packageCache: {}
}).plugin(tsify));

function deploy() {
	return browserify({
		basedir: '.',
		debug: true,
		entries: ['src/main.ts'],
		cache: {},
		packageCache: {}
	})
		.plugin(tsify)
		.transform('babelify', {
			presets: ['es2015'],
			extensions: ['.ts']
		})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('dist'));
}

function bundle() {
	return watchedBrowserify
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest("dist"));
}

gulp.task('copyHtml', function () {
	return gulp.src(paths.pages)
		.pipe(gulp.dest('dist'));
});

/* task - dev:watch */
gulp.task('dev:watch', ['copyHtml'], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);


/* task - prod:deploy */
gulp.task('prod:deploy', ['copyHtml'], deploy);




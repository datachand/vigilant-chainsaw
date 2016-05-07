import gulp from 'gulp';
import del from 'del';
import utility from 'gulp-util';

export default function CleanDirectories (cb) {
	del(['./dist']).then(paths => {
		cb();
	});
}

gulp.task('clean', CleanDirectories);
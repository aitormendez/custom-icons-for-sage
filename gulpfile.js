

var gulp   = require('gulp');
var sketch = require('gulp-sketch');
var svgSprite	 = require('gulp-svg-sprite');
var plumber = require('gulp-plumber');

gulp.task('sketch', function(){
  return gulp.src('./src/sketch/*.sketch')
    .pipe(sketch({
      export: 'slices',
      formats: 'svg'
    }))
    .pipe(gulp.dest('./dist/images/'));
});


var config = {
  "dest" : ".",
  "mode" : {
    "css" : {
      "dest": "../dist/styles/",
      "sprite": "../dist-svg/sprite.svg",
      "example": {
          "dest": "../../svg-icons/example/sprite.html"
      },
      "render" : {
        "scss" : {
          "dest" : "../../assets/styles/svg-sprite/_sprite.scss"
        }
      }
    }
  }
};


gulp.task('sprite', function(){
  return gulp.src('**/*.svg', {cwd: './dist/images/'})
    .pipe(plumber())
  	.pipe(svgSprite(config))
  	.pipe(gulp.dest('.'));
});

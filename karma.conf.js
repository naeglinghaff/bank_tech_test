
module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: ['karma-browserify', 'karma-jasmine', 'karma-coverage', 'karma-chrome-launcher'],
    frameworks: ['jasmine', 'browserify'],
    files: ['./spec/*.js', './src/*.js'],
    browsers: ['Chrome'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: { 'spec/*.js': ['browserify', 'coverage'], 'src/*.js': ['browserify', 'coverage'] },
    browserify: {
              watch: true,
              debug: true
          },
    coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: 'text-summary' }
            ]
        },
  });
};

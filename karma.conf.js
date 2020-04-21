module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: ['karma-jasmine', 'karma-coverage', 'karma-chrome-launcher'],
    frameworks: ['jasmine'],
    files: [
      'src/*.js',
      'spec/*.js'
    ],
    browsers: ['Chrome'],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: { 'src/*.js': ['coverage'] },
    coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: 'text-summary' }
            ]
        }
  });
};

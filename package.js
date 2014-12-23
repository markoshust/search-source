Package.describe({
  "summary": "Reactive Data Source for Search",
  "version": "0.0.1",
  "git": "https://github.com/meteorhacks/search-source.git",
  "name": "meteorhacks:search-source"
});

Package.onUse(function(api) {
  configurePackage(api);
  api.export(['SearchSource']);
});

Package.onTest(function(api) {
  configurePackage(api);

  api.use(['tinytest', 'mongo-livedata'], ['client', 'server']);
});

function configurePackage(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['tracker', 'underscore', 'mongo', 'reactive-var'], ['client']);

  api.add_files([
    'lib/server.js',
  ], ['server']);

  api.add_files([
    'lib/client.js',
  ], ['client']);
}
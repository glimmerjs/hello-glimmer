import Application from '@glimmer/application';
import Resolver, { ResolverConfiguration, BasicModuleRegistry } from '@glimmer/resolver';
import config from './config/environment';
import moduleMap from './config/module-map';

const resolverConfiguration: ResolverConfiguration = {
  app: { name: config.modulePrefix, rootName: config.modulePrefix },
  types: config.moduleConfiguration.types,
  collections: config.moduleConfiguration.collections
};

console.log('resolverConfiguration', resolverConfiguration);
console.log('moduleMap', moduleMap);

export default class App extends Application {
  constructor(options) {
    let moduleRegistry = new BasicModuleRegistry(moduleMap);
    let resolver = new Resolver(resolverConfiguration, moduleRegistry);

    super({
      rootName: config.modulePrefix,
      resolver,
      ...options
    });
  }
}
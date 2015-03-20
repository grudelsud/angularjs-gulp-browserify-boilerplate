# For the impatients

    npm install -g gulp
    npm install -g bower
    npm install
    gulp

# How it works

I've read quite a few blog posts, tutorials, etc. and eventually - based on what I've learned - created an Angular boilerplate with a simple approach based on components that I'm happy to work with. It should easily scale to any size of project, from tiny single-directive apps as this boilerplate, to larger component-based mayhems.

## Structure

[App.js](scripts/app.js) defines an angular app and **requires** all the external componentes, injecting them as requirements in the main app. 

Components are defined through an `index.js` file, automagically recognized by browserify as the main entry point for the specific module. A component definition is hence made through 3 main steps:

1. creating the angular module and exporting it from `index.js`, e.g.

        // init module and export
        module.exports = angular.module('components.welcome', []);
2. requiring all the elements needed for the module from `index.js`, e.g.

        // require here all the components imported by this module:
        require('./welcome.js');
3. from the element itself, attach the angular service/directive/etc. by requiring the component export and attaching definitions, e.g.

        // require the angular module defined by this component
        var ngModule = require('./');
        // attach the directive/service/controller defined by this component
        ngModule.directive('welcomeMsg', [WelcomeMsg]);

the whole component is then required by the main app and injected into its dependencies, e.g.:
    // require list of components
    require('./components/welcome');

this way, adding additional components is as simple as dropping a new directory containing all the required scripts and importing it into the main app. Or, on the other hand, deleting a component only requires to delete its specific require and dependency injection.

## Build

[gulp](gulpfile.js) defines the following tasks:

- **default** via `gulp`: builds the app defined in `scripts/app.js` calling browserify on it. 
- **watch** via `gulp watch`: watches for changes and calls the main build task.
- **lint** via `gulp lint`: this is called automatically by build + watch

# Caveats

This app is just a simple boilerplate for an angularjs app compiled with gulp+browserify. If anyone comes with clever (and simple) suggestions to improve it, more than welcomed!

# References

- [Browserify Your AngularJS App](https://blog.codecentric.de/en/2014/08/angularjs-browserify/)
- [GoCardless Angular Style Guide](https://github.com/gocardless/angularjs-style-guide)
- [An AngularJS Style Guide for Closure Users at Google](http://google-styleguide.googlecode.com/svn/trunk/angularjs-google-style.html)

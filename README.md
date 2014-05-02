# For the impatients

    npm install -g gulp
    npm install -g bower
    npm install
    gulp

# How does it work

[gulp](gulpfile.js) executes one single task: it reads `scripts/main/app.js` and calls browserify on it. 

[app.js](scripts/main/app.js) defines an angular app and **requires** all the external modules injecting all requirements in the app. 

all modules are defined through a `_module_init.js` file (e.g. initialize [boilerplate.controllers module](scripts/controllers/_module_init.js) under `/scripts/controllers` folder) that both **exports the angular module** and **requires** all functions (e.g. controllers, directives, factories, etc.) defined in the same folder.

all functions defined for the angular module are importing the module itself using **browserify's require** and adding properties to it (e.g. `/scripts/controllers/welcome.js`)

# Caveats

there are a lot of things that I don't like in this boilerplate, but I think its main caveat is that using `scripts/main/app.js` as a single source in browserify does not let gulp execute lint/shim on singular js files. If anyone comes with a clever (and simple) solution to fix it, more than welcomed!
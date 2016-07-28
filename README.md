# Vue Seed Project

This is a self-contained seed project off of which you can build vue based web apps. Many plugins have been installed for ease and convenience. This app has the following items in stack.

1. Package Managers
    1. [Node Package Manager](https://www.npmjs.com/)
    2. [Bower](http://bower.io/)
2. Automatic task runner: [Grunt](http://gruntjs.com/)
3. Unit testing: [Jasmine](http://jasmine.github.io/)
4. Front-end Dependencies
    1. [vuejs](https://vuejs.org/)    
5. Backend Dependencies
    1. [node](https://nodejs.org/)
    2. [express](expressjs.com/)


## Prerequisites

Install [NodeJS](https://nodejs.org/dist/v5.10.1/node-v5.10.1-x64.msi) to expose `npm` related commands


## Installation

1. Install development dependencies `npm install grunt-cli bower karma karma-jasmine karma-phantomjs-launcher -g`
2. After installing Grunt and Bower, install Ruby.
    1. [For Windows](http://rubyinstaller.org/)
    2. [For Linux and OSX](http://ruby.org)
    3. Run `gem install compass`
3. Install NPM dependencies `npm install`
4. Install Bower dependencies `bower install`


## Before you run

1. Make sure your Node modules are up to date `npm update`.
2. Make sure your Bower modules are up to date `bower update`.


## Running the application

1. Do `grunt serve` to run the entire application. This will open your web-app on your default browser. Any subsequent changes to your code will automatically update your app. So do `grunt serve` only once and leave the processes running as you build your app. If you want to manually build a distributable, perform unit tests, auto-update API documentation, run your servers etc, follow the remaining steps. Otherwise, ignore them.
2. Do `grunt build` to build a distributable `www` folder
    * Command Line Arguments
        * `--environment=` **development** or **production**
        * `--open=` **true** or **false** allows for opening of web browser after build completes (happens by default via `serve`)
3. Do `grunt test` to run unit tests.
4. Do `grunt docs` to build documentation based on code-source. Go to `http://localhost:8282` to see the API documentation generated by this grunt task.
   * Command Line Arguments
       * `--watch` allows you to automatically reload the documentation server if you make an update.
5. Do `grunt deploy` to run watchers that will rebuild your distributable folder against your code-base.
    * Command Line Arguments
        * `--environment=` **development** or **production**
6. Do `grunt run` to run your front-end server
7. Do `grunt karma` to start the test server that runs as you write unit tests.

## What files to work on

1. All of your **source code** sits in the `app` folder. Do not edit any other file for project-related tasks.
2. **NPM packages** are listed in `package.json`. It's not best practice to edit this file. If you want to install a new package, do `npm install <package name>`.
   * Command Line Arguments
      * `--save`: Updates the `depencencies` object in `package.json`
      * `--save-dev`: Updates the `devDependencies` object in `package.json`
      * `-g`: Installs your package globally
3. **Bower packages** are frontend dependencies. They are listed in `bower.json`. Similar to `package.json`, it's not best practice to edit this file either. To install new packages, do `bower install <package name>`.
  * Command Line Arguments
     * `--save`: Updates the `depencencies` object in `bower.json`
     * `--save-dev`: Updates the `devDependencies` object in `bower.json`
     * `-g`: Installs your package globally
4. **Automated tasks** can be added as *grunt tasks* in `gruntfile.js`. Install *grunt plugins* as *npm packages* so that your tasks can be configured with those plugins.
5. **Unit tests** reside in the `specs` folder.

## License
MIT License

Copyright (c) [2016] [Divyanth Jayaraj]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
